import SearchCocktail from "@/components/Searchcocktail";

export const metadata = {
  title: "Bar | Cocktails",
  description: "Uso de API CocktailsDB",
};

export default function Home() {
  return (
    <main className=" bg-wine h-screen">
      <div className=" bg-wine h-auto">
      <SearchCocktail />
      </div>
    </main>
  );
}
