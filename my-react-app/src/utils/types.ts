// User
export interface UserData {
  userInfos: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}
export interface UserActivity {
  id: number;
  sessions: Session[];
}

export interface Session {
  day: string;
  sessionsWeight: number;
  calories: number;
}

export interface UserPerformance {
  id: number;
  kind: string;
  data: {
    value: number;
    kind: string;
  };
}


// User main data
export interface ActivityProps {
  dailyActivity: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}

// Performance data
export interface PerformanceDataItem {
  value: number;
  kind: number;
}

// Score data
export interface ScoreData {
  score: number;
  todayScore?: number;
}

/* export interface SessionDuration {
  day: number;
  sessionsWeight: number;
} */

export interface UserData {
  score?: number;
  todayScore?: number;
}

// Session duration data
export interface SessionDuration {
  day: number;
  sessionLength: number;
}

export interface SessionDuration {
  sessionDuration: {
    day: string;
    sessionLength: number;
  }[];
}

export interface DurationProps {
  sessionDuration: {
    day: string;
    sessionLength: number;
  }[];
}
// Health metrics data
export interface Metric {
  icon: string;
  count: number;
  type: string;
}
export interface HealthMetricsProps {
  metrics: Metric[];
}

// Daily activity data
export interface ActivitySession {
  day: string;
  kilogram: number;
  calories: number;
}

export interface ActivityProps {
  dailyActivity: ActivitySession[];
}
