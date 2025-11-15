import mockupData from "../data/mockup.json";

export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur de requête : ${response.status}`);
    }
    const data = await response.json();
    console.log("Data récupérée du serveur", data);
    return data;
  } catch (err) {
    console.warn(err);
    try {
      console.log("Lecture du JSON local");
      return mockupData;
    } catch (error) {
      console.error("Échec du chargement des données :", error);
      return null;
    }
  }
}
