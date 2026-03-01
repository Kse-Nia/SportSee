import type {
  ActivitySession,
  SessionDuration,
  FormattedSession,
  UserData,
  UserPerformance,
} from "./types.js"; // TS Data types import

/* ========================= FORMAT DAILY ACTIVITY DATA  ========================= */

// Add index to Activity Data for labeling
export const formatDailyActivityData = (
  dailyActivity: ActivitySession[]
): (ActivitySession & { index: number })[] => {
  return dailyActivity.map((item, index) => {
    return {
      ...item,
      index: index + 1,
    };
  });
};

/* ========================= FORMAT PERFORMANCES DATA  ========================= */

// Translate and reorder performance data
export const formatPerformancesData = (performances: UserPerformance) => {
  // Translate kinds data
  const kindTranslation: Record<number, string> = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  // Map performance data to translated kinds
  const mapped = performances.data.map((item) => ({
    kind: kindTranslation[item.kind],
    value: item.value,
  }));

  // Change order of kinds
  const order = [
    "Intensité",
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
  ];

  // Return reordered data
  return order.map((label) => mapped.find((item) => item.kind === label));
};

/* =========================  FORMAT SCORE DATA  ========================= */
export const formatScoreData = (score: number) => {
  return [
    {
      name: "Score",
      value: Math.round(score * 100), // Convert to percentage and round
      fill: "#FF0000",
    },
  ];
};

/* =========================  CHECK SCORE DATA FORM ========================= */
export const checkScore = (userData: UserData | null): number | undefined => {
  return userData?.todayScore ?? userData?.score;
};

/* =========================  FORMAT SESSION DURATION DATA  ========================= */

// Translate day numbers to letters
export const formatDurationData = (
  sessions: SessionDuration[]
): FormattedSession[] => {
  const days = ["", "L", "M", "M", "J", "V", "S", "D"];

  // Map session data to include translated days
  return sessions.map((session) => ({
    day: days[session.day] ?? "",
    sessionLength: session.sessionLength,
  }));
};
