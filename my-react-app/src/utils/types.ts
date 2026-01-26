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