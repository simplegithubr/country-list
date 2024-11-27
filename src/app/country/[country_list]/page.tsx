"use client"
import { useRouter } from "next/navigation"

export default function CountryList ({params}  : {params: {country_list : string}}) {
  const router = useRouter()
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      // Check if there is history to navigate back
      router.back(); // Go back to the previous page
    } else {
      router.push("/"); // Fallback to home page if no history
    }
  }
  const countries : {
    name: string,
    population : number,
    capital : string 
  } [] = [
    {
      name: "Pakistan",
      population : 248000000 ,
      capital : "islamabad" 

  },
  {
    name: "India",
    population : 1430000000,
    capital : "New Delhi" 

},
{
  name: "Korea",
  population :52000000 ,
  capital : "Seoul" 

},  
{
  name: "Japan",
  population : 124000000,
  capital : "Tokyo" 

},
{
name: "England",
population : 57000000,
capital : "London" 

}, 
]
function countryfind( country_url : string){
return countries.find(country=> country.name.toLowerCase() === country_url)
}
const result = countryfind(params.country_list)
    return (
  <div className=" bg-green-300 text-gray   p-6 flex flex-col justify-center items-center mt-8 gap-3">
    {result? (
      <>
          <h1>Country Name: {result.name}</h1>
          <h1>Country Population: {result.population}</h1>
          <h1>Country Capital: {result.capital}</h1>
           </> 
    ) : (<h1>Country Not Found</h1>)}
    <button onClick={handleBack} className="bg-blue-600 rounded py-2  text-white px-4 mt-8  hover:bg-purple-600 ml-5"> Back to</button>
   
  </div>
    );
  } 