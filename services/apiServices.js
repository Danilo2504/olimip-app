const URL = "http://localhost:3006/location/all";

export const getLocations = async () => {
  const response = await fetch(URL);
  const data = await response.json()
  console.log(data)
  return data
};