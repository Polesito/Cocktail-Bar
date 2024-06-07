import Image from "next/image";
import Link from "next/link";

export default function Cocktailcard({ cocktail }) {
    const { strDrink, strDrinkThumb, idDrink } = cocktail;
  return (
    <Link href={`/cocktails/${idDrink}`}>
      <div className="flex flex-col items-center p-2">
        <div className="">
          <Image
            src={strDrinkThumb}
            alt={strDrink}
            width={200}
            height={200}
            className="rounded-lg mb-4"
          />
        </div>
        <div>
          <h2 className="font-bold text-slate-200 leading-5">{strDrink}</h2>
        </div>
      </div>
    </Link>
  );
}
