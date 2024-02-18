
import Banner from "./Banner.jsx"
import Card from "./Card.jsx"
import './HomePage.css';

function HomePage (){

    return(
        <section  className="home-page-container">
            <Banner />
            <div className='card-container'>
                    <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    </div>
            </div>
        </section>
            );
        }


    export default HomePage