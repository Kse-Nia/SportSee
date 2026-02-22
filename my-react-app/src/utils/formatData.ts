import type {
  ActivitySession,
  SessionDuration,
  UserData,
  UserPerformance,
} from "./types.js"; // TS Data types import

/* ========================= FORMAT DAILY ACTIVITY DATA  ========================= */
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
export const formatDurationData = (sessions: SessionDuration[]) => {
  // Translate day numbers to letters
  const daysTypes: { [key: number]: string } = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  return sessions?.map((session: SessionDuration) => ({
    day: daysTypes[session.day],
    sessionLength: session.sessionLength,
  }));
};
