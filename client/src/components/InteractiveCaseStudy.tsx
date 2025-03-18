import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudyData {
  stepNumber: number;
  title: string;
  description: string;
  metricName?: string;
  metricValue?: number;
  date?: string;
}

interface InteractiveCaseStudyProps {
  title: string;
  data: CaseStudyData[];
  onComplete?: () => void;
}

export function InteractiveCaseStudy({
  title,
  data,
  onComplete,
}: InteractiveCaseStudyProps) {
  // Find the minimum step number to set as initial state
  const minStep = Math.min(...data.map(d => d.stepNumber));
  const [currentStep, setCurrentStep] = useState(minStep);

  // Group data by step number to create chart data
  const getChartData = (stepNum: number) => {
    return data
      .filter(item => item.stepNumber === stepNum && item.metricValue !== undefined)
      .map(item => ({
        name: item.date || '',
        value: item.metricValue || 0
      }));
  };

  const uniqueSteps = Array.from(new Set(data.map(d => d.stepNumber))).sort((a, b) => a - b);
  const maxStep = Math.max(...uniqueSteps);

  // Get the current step's data (including title and description)
  const currentStepData = data.find(d => d.stepNumber === currentStep && d.title && d.description);

  const goToNextStep = () => {
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > minStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!currentStepData) return null;

  const chartData = getChartData(currentStep);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>

        {/* Progress indicator */}
        <div className="flex gap-2 mb-6">
          {uniqueSteps.map((step) => (
            <div
              key={step}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                step <= currentStep ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">
              {currentStepData.title}
            </h3>
            <p className="text-muted-foreground">
              {currentStepData.description}
            </p>

            {chartData.length > 0 && (
              <div className="h-[300px] mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={goToPreviousStep}
            disabled={currentStep === minStep}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button onClick={goToNextStep}>
            {currentStep === maxStep ? (
              "Finish"
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}