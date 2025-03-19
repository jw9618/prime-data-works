# Visualizer Charts Guide

## Chart Types and Use Cases

### 1. Line Charts
Best for showing trends over time
```
[visualizer id="CHART_ID"]
```
Example data:
- Month, Revenue
- Jan, 1000
- Feb, 1200
- Mar, 1500

### 2. Bar Charts
Perfect for comparing categories
```
[visualizer id="CHART_ID"]
```
Example data:
- Service, Revenue
- Analytics, 5000
- Consulting, 4000
- Training, 3000

### 3. Pie Charts
Ideal for showing proportions
```
[visualizer id="CHART_ID"]
```
Example data:
- Category, Percentage
- Web Analytics, 40
- Mobile Analytics, 35
- Social Analytics, 25

## Data Import Methods

### 1. Manual Input
1. Create new chart
2. Choose chart type
3. Enter data in spreadsheet format
4. Save and get shortcode

### 2. CSV Import
1. Prepare CSV file with headers
2. Create new chart
3. Choose "Import from CSV"
4. Upload file
5. Map columns if needed

### 3. Google Sheets Import
1. Create Google Sheet
2. Make public
3. Copy sheet URL
4. Create new chart
5. Choose "Import from Google Sheets"
6. Paste URL

## Chart Customization

### 1. Colors and Styling
- Chart area colors
- Series colors
- Font settings
- Background options

### 2. Layout Options
- Chart dimensions
- Margins and padding
- Legend position
- Axis customization

### 3. Advanced Features
- Tooltips configuration
- Animation settings
- Responsive options
- Interactive elements

## Implementation Examples

### 1. Revenue Growth Chart
```
[visualizer id="revenue_chart" title="Monthly Revenue Growth"]
```
Data structure:
- Month, Revenue, Target
- Jan, 10000, 12000
- Feb, 12000, 13000
- Mar, 15000, 14000

### 2. Service Distribution Chart
```
[visualizer id="services_chart" title="Services Breakdown"]
```
Data structure:
- Service, Percentage
- Data Analysis, 40
- Consulting, 35
- Training, 25

### 3. Performance Metrics Chart
```
[visualizer id="metrics_chart" title="Key Performance Indicators"]
```
Data structure:
- Metric, Value, Goal
- Conversions, 250, 300
- Engagement, 75, 80
- Retention, 85, 90
