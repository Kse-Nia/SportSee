
// Radar data
export const formatData = (performances) => {
  const kindTypes = {
    1: "Cardio",
    2: "Energy",
    3: "Endurance",
    4: "Strength",
    5: "Speed",
    6: "Intensity",
  };

  return performances?.data.map((performance) => ({
    kind: kindTypes[performance.kind],
    value: performance.value,
  }));
};

// Score format to %
export const formatScoreData = (score) => {
  return [{ name: "Score", value: score * 100, fill: "#FF0000" }];
};

// Get right score
export const chechScore = (userData) => {
  return userData?.todayScore ? userData?.todayScore : userData?.score;
};

// Duration session; day to letter
export const formatDurationData = (sessionDuration) => {
  const daysTypes = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  return sessionDuration?.map((session) => ({
    day: daysTypes[session.day],
    sessionLength: session.sessionsWeight,
  }));
};
