import './HomePage.css';
import Banner from "../Component/Banner/Banner.jsx";
import imgHomepage from '../assets/img-homepage.png';
import Card from "../Component/Card/Card.jsx";
import logementsData from '../Data/Logements.json';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
<Banner imageSrc={imgHomepage}>
<p>Chez vous,<br className="mobile-break"/> partout et ailleurs</p>
</Banner>
    <section className="home-page-container">
      <div className='card-container'>
        <div className="row">
          {logementsData.map((logement) => (
            <Link to={`/logement/${logement.id}`} key={logement.id}>
              <Card title={logement.title} cover={logement.cover} />
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default HomePage;