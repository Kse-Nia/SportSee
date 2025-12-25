export interface DailyActivityItem {
  day: string;
  kilogram: number;
  calories: number;
}

export interface dataPerformance {
  kind: string;
  value: number;
}

export interface Performances {
  data: PerformanceDataItem[];
}
