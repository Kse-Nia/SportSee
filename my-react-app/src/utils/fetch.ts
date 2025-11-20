import mockupData from "../data/mockup.json";

/* export async function fetchData(url: string) {
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
} */

export async function fetchData(url: string) {
  try {
    // Fetching from backend
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log("Backend is running", data);
    return data;
  } catch (err) {
    console.warn(err);
    // Running JSON if  backend is unavailable
    try {
      console.log("Local JSON data"); // check data 

      const urlParts = url.split("/"); // split URL to get user ID
      const userIdIndex = urlParts.indexOf("user") + 1;
      const userId = parseInt(urlParts[userIdIndex]);

      // Searching user
      const user = Array.isArray(mockupData)
        ? mockupData.find((u: any) => u.id === userId)
        : mockupData;

      if (user) {
        return { data: user };
      } else {
        console.error("Cannot find user");
        return null;
      }
    } catch (error) {
      console.error("Error, cannot get data :", error);
      return null;
    }
  }
}
