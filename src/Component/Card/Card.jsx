import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h2 className='card-title'>{title}</h2>
    </div>
  );
}

Card.propTypes = {
 title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;