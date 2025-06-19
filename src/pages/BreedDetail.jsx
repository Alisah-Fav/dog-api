import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiGetBreedDetail, apiGetFacts } from "../services/breeds";

const BreedDetail = () => {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [breedRes, factsRes] = await Promise.all([
          apiGetBreedDetail(id),
          apiGetFacts(),
        ]);

        // Extract breed info
        const breedData = breedRes.data.data;
        setBreed({
          id: breedData.id,
          ...breedData.attributes,
        });

        // Extract dog facts (as plain text)
        const factList = factsRes.data.data.map((fact) => fact.attributes.body);
        setFacts(factList);
      } catch (err) {
        console.error("Error fetching breed details:", err);
        setError("Failed to load breed info.");
      }
    };

    fetchDetails();
  }, [id]);

  if (error) return <p className="text-red-600 text-center p-6">{error}</p>;
  if (!breed) return <p className="p-6 text-center">Loading breed...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{breed.name}</h1>

      <div className="text-gray-700 space-y-2 text-lg">
        <p><strong>Description:</strong> {breed.description}</p>
        <p><strong>Life Span:</strong> {breed.life?.min} – {breed.life?.max} years</p>
        <p><strong>Hypoallergenic:</strong> {breed.hypoallergenic ? "Yes" : "No"}</p>
        <p><strong>Male Weight:</strong> {breed.male_weight?.min} – {breed.male_weight?.max} kg</p>
        <p><strong>Female Weight:</strong> {breed.female_weight?.min} – {breed.female_weight?.max} kg</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">🐾 Fun Dog Facts</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BreedDetail;
