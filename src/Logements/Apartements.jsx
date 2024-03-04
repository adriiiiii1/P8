import { useParams } from 'react-router-dom';
import logementsData from '../Data/Logements.json';

function Apartment() {
  const { id } = useParams();
  const apartment = logementsData.find((logement) => logement.id === id);
  return (
    <div>
      <h1>{apartment.title}</h1>
    </div>
  );
}

export default Apartment;