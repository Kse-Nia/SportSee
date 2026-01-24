export interface DailyActivityItem {
  day: string;
  kilogram: number;
  calories: number;
}

/* export interface dataPerformance {
  kind: string;
  value: number;
} */

/* export interface Performances {
  data: PerformanceDataItem[];
} */

export interface PerformanceDataItem {
  value: number;
  kind: number;
}

export interface ScoreData {
  score: number;
}

export interface SessionDuration {
  day: number;
  sessionLength: number;
}

export interface SessionDuration {
  day: number;
  sessionsWeight: number;
}
