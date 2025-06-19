import { useEffect, useState } from "react";
import { apiGetBreeds } from "../services/breeds";
import BreedCard from "../components/BreedCard";

export default function Home() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGetBreeds()
      .then((response) => {
        const formattedBreeds = response.data.data.map((item) => ({
          id: item.id,
          ...item.attributes,
        }));
        setBreeds(formattedBreeds);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching breeds:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6 text-center">Loading breeds...</p>;

  return (
    <div className="p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          🐾 Dog Breed Explorer
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing dog breeds and learn about their unique characteristics.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {breeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
