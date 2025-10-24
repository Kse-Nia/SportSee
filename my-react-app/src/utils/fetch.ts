/* export async function fetchData<T>(
  url: string,
  mockupData: (filePath: string) => T
): Promise<T | null> {
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
      const filePath = "./lib/mockup.json";
      const localData = mockupData(filePath);
      console.log("Data récupérée du mockupLocal");
      return localData;
    } catch (error) {
      console.error("Échec du chargement des données locales :", error);
      return null;
    }
  }
}
 */

export async function fetchData(
  url: string,
  mockupData: (filePath: string) => any
) {
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
      const filePath = "/mockup.json";
      const localData = mockupData(filePath);
      console.log("Data récupérée du mockupLocal");
      return localData;
    } catch (error) {
      console.error("Échec du chargement des données locales :", error);
      return null;
    }
  }
}
