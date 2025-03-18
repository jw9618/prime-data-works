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
  const [currentStep, setCurrentStep] = useState(0);

  // Group data by step number to create chart data
  const getChartData = (stepNum: number) => {
    return data
      .filter(item => item.stepNumber === stepNum && item.metricValue !== undefined)
      .map(item => ({
        name: item.date || '',
        value: item.metricValue || 0
      }));
  };

  const currentStepData = data.find(d => d.stepNumber === currentStep);
  const uniqueSteps = [...new Set(data.map(d => d.stepNumber))];

  const goToNextStep = () => {
    if (currentStep < Math.max(...uniqueSteps)) {
      setCurrentStep(currentStep + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > Math.min(...uniqueSteps)) {
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
                  <AreaChart data={chartData}>
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
            disabled={currentStep === Math.min(...uniqueSteps)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button onClick={goToNextStep}>
            {currentStep === Math.max(...uniqueSteps) ? (
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