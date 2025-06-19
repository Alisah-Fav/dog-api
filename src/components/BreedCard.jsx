import React from 'react';
import { Link } from 'react-router';

const BreedCard = ({ breed }) => {
  return (
    <Link to={`/breed/${breed.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
        <h2 className="text-xl font-semibold mb-2">{breed.name}</h2>
        <p className="text-sm text-gray-600 mb-1">
          Life Span: {breed.life?.min} - {breed.life?.max} years
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Hypoallergenic: {breed.hypoallergenic ? "Yes" : "No"}
        </p>
        <p className="text-sm text-gray-600">
          Description: {breed.description}
        </p>
      </div>
    </Link>
  );
};

export default BreedCard;
