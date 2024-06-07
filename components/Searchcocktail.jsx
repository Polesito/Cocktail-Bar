"use client";

import { useEffect, useRef, useState } from "react";
import Cocktailcard from "./Cocktailcard";
import { loadCocktails } from "@/lib/cocktails";

export default function SearchCocktails() {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const textRef = useRef();

  const onSearch = (e) => {
    e.preventDefault();
    setSearch(textRef.current.value);
    textRef.current.value = "";
  };

  useEffect(() => {
    loadCocktails(search).then((cocktails) => {
      setCocktails(cocktails);
    });
  }, [search]);

  return (
    <div className="p-2">
        <form onSubmit={onSearch} className="m-auto w-80 border-2 rounded-md border-slate-200 top-0 right-0 mt-10">
          <input
            type="text"
            className=" rounded-md p-1 mr-2 mx-auto bg-wine text-slate-200"
            ref={textRef}
          />
          <button className="bg-wine  px-1.5 text-slate-200">
            Search
          </button>
        </form>
        <section className="text-slate-200 border-y-2 m-auto border-orange-950 xl:w-4/6 lg:w-3/4 md:w-4/5 w-1/2 mt-8"></section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-10 xl:ml-96 xl:mr-96 lg:ml-56 lg:mr-56 md:ml-24 md:mr-24">
        {cocktails.map((cocktail) => (
          <Cocktailcard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </section>
    </div>
  );
}
