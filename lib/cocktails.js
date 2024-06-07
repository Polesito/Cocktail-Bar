const URL = `https://thecocktaildb.com/api/json/v1/`;
const API_KEY = `1`;

export const loadCocktails = async (search) => {
  let url = `${URL}${API_KEY}/filter.php?c=Ordinary_Drink`;
  if (search) {
    url = `${URL}${API_KEY}/search.php?s=${search}`;
  }
  const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
};

export const loadCocktailById = async (id) => {
    const data = await fetch(`${URL}${API_KEY}/lookup.php?i=${id}`);
    const { drinks } = await data.json();
    return drinks === -1 ? null : drinks;
};