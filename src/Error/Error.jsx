
import { Link } from 'react-router-dom';
import './Error.css';

function Error (){

    return(

        <div className="Error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
            <Link className='ErrorLink' to="/">Retournez sur la page d&apos;accueil</Link>
        </div>
    );
    }
    
    export default Error