export interface UserData {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore?: number;
  score: number | undefined;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

export interface ActivitySession {
  day: string;
  kilogram: number;
  calories: number;
}

export interface UserActivity {
  userId: number;
  sessions: ActivitySession[];
}

export interface SessionDuration {
  day: number;
  sessionLength: number;
}

export interface FormattedSession {
  day: string;
  sessionLength: number;
}

export interface PerformanceDataItem {
  value: number;
  kind: number;
}

export interface UserPerformance {
  userId: number;
  kind: Record<string, string>;
  data: PerformanceDataItem[];
}

export interface DurationProps {
  sessionDuration: FormattedSession[] | null;
}

export interface Metric {
  icon: string;
  count: number;
  type: string;
}

export interface HealthMetricsProps {
  metrics: Metric[];
}
