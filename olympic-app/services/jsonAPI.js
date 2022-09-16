const URL = "http://localhost:3006/location/all";

export const showData = async () => {
  const response = await fetch(URL);
  const data = await response.json()
  return data
};