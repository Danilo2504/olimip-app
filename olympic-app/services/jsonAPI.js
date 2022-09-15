const URL = "https://jsonplaceholder.typicode.com/photos";

export const showData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};