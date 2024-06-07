export default function Ingredient({ cocktail }) {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
        if (cocktail[`strIngredient${i}`]) {
          return (
            <li key={i} className="m-auto text-center ">
              {cocktail[`strIngredient${i}`]} - {cocktail[`strMeasure${i}`]}
            </li>
          );
        }
        return null;
      })}
    </>
  );
}
