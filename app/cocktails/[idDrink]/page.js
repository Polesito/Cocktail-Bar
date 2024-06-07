"use client";

import { loadCocktails, loadCocktailById } from "@/lib/cocktails";
import { notFound } from "next/navigation";
import Image from "next/image";
import Ingredient from "@/components/Ingredient";

export default async function CocktailPage({ params }) {
  const { idDrink } = params;
  const cocktail = await loadCocktailById(idDrink);
  if (!cocktail) {
    return notFound();
  }
  const [
    {
      strDrink,
      strDrinkThumb,
      strInstructions,
      strAlcoholic,
      strGlass,
      strCategory,
      strIBA,
    },
  ] = cocktail;

  return (
    <main className="bg-wine h-screen p-2">
      <a
        href="/cocktails"
        className="hover:bg-orange-950 px-4 w-min py-1 rounded flex flex-row text-slate-200"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z"
          />
        </svg>
        Back
      </a>
      <h1 className="text-2xl font-bold text-center items-center text-slate-200 p-4">
        {strDrink}
      </h1>
      <Image
        src={strDrinkThumb}
        alt={strDrink}
        width={300}
        height={300}
        className="m-auto rounded-md border-2 border-orange-950"
      />
      <div className="m-auto items-center text-center mt-4">
        <span className="text-slate-200">
          <button className="bg-orange-950 border-2 mr-2 border-slate-200 rounded-md p-0.5">
            {strCategory}
          </button>
          <button className="bg-orange-950 border-2 mr-2 border-slate-200 rounded-md p-0.5">
            {strAlcoholic}
          </button>
          <button className="bg-orange-950 border-2 border-slate-200 rounded-md p-0.5">
            {strGlass}
          </button>
        </span>
      </div>
      <>
        {strIBA && (
          <div className="m-auto items-center text-center">
              <button className="bg-orange-950 border-2 mr-2 mt-2 border-slate-200 rounded-md p-0.5 text-slate-200">
                {strIBA}
              </button>
          </div>
        )}
      </>
      <section className="text-slate-200 border-y-2 m-auto border-orange-950 w-3/5 mt-8"></section>
      <div className="text-slate-200 m-auto w-2/4 mt-8 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '">
        <ul>
          <li className="text-xl font-bold m-auto items-center text-center">
            Ingredientes:
            <section className="text-slate-200 border-y-2 m-auto border-orange-950 w-2/4 mt-1 mb-3"></section>
            <li className="font-normal">
              {cocktail.map((cocktail) => (
                <Ingredient key={cocktail.idDrink} cocktail={cocktail} />
              ))}
            </li>
          </li>
        </ul>
        <ul>
          <li className="text-xl font-bold m-auto items-center text-center">
            Instrucciones:
            <section className="text-slate-200 border-y-2 m-auto border-orange-950 w-3/4 mt-1 mb-3"></section>
          </li>
          <li className="m-auto items-center text-center">{strInstructions}</li>
        </ul>
      </div>
    </main>
  );
}

export async function generateStaticParms() {
  const allCocktails = await loadCocktails();
  return allCocktails.map((cocktail) => ({
    idDrink: cocktail.idDrink,
  }));
}
