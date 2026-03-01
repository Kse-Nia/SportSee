// USER DATA
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

// ACTIVITY PROPS
export interface ActivityProps {
  dailyActivity: ActivitySession[];
}
// ACTIVITY DATA
export interface ActivitySession {
  day: string;
  kilogram: number;
  calories: number;
}

// SESSIONS DATA
export interface UserActivity {
  userId: number;
  sessions: ActivitySession[];
}

// SESSIONS DURATION DATA
export interface SessionDuration {
  day: number;
  sessionLength: number;
}

export interface FormattedSession {
  day: string;
  sessionLength: number;
}

// PERFORMANCE DATA
export interface PerformanceDataItem {
  value: number;
  kind: number;
}

// USER PERFORMANCE DATA
export interface UserPerformance {
  userId: number;
  kind: Record<number, string>;
  data: PerformanceDataItem[];
}

// RADAR PROPS
export interface RadarProps {
  performances: UserPerformance | null;
}

// DURATION PROPS
export interface DurationProps {
  sessionDuration: FormattedSession[] | null;
}

// SCORE PROPS
export interface ScoreProps {
  score: number | undefined;
}

export interface Metric {
  icon: string;
  count: number;
  type: string;
}

export interface HealthMetricsProps {
  metrics: Metric[];
}
