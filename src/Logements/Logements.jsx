import { useParams } from 'react-router-dom';
import Slider from "../Component/Slider/Slider.jsx";
import logementsData from '../Data/Logements.json';
import Collapse from "../Component/Collapse/Collapse.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Error from '../Error/Error.jsx';
import './Logements.css';


function Logements() {
  const { id } = useParams();
  const apartment = logementsData.find((logement) => logement.id === id);

  if (!apartment) {
    return <Error />;
  }

  return (
    <div className="Logements">
      <Slider images={apartment.pictures} />
      <div className="logements-info">
        <div className="logements-left-right">
          <div className="logements-left">
            <h1 className="Logements_title">{apartment.title}</h1>
            <div className="logements-location">
            <p className="logements_location">{apartment.location}</p>
            </div>
            <div className="logements-tags">
              {apartment.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="logements-right">
            <div className="host">
              <p className="host-name">{apartment.host.name}</p>
              <img className="host-picture" src={apartment.host.picture} alt={apartment.host.picture} />
            </div>
            <div className="logements-rating">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <FontAwesomeIcon key={index} icon={faStar} className={ratingValue <= apartment.rating ? 'star-filled' : 'star-empty'} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="logements_collapses">
          <Collapse title="Description">
            <p>{apartment.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul className='list-style'>
              {apartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Logements;