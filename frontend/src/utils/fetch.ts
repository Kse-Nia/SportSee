export async function fetchData<T>(
  url: string,
  mockupData: any
): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur de requête : ${response.status}`);
    }
    const data = await response.json();
    console.log("Data récupérée endpoint");
    return data;
  } catch (err) {
    console.warn(err);
    try {
      const filePath = "/mockup.json";
      const localData = mockupData(filePath);
      console.log("Data récupérée mockupLocal");
      return localData;
    } catch (error) {
      console.error("Échec du chargement des données locales :", error);
      return null;
    }
  }
}
