import './Collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <>
    <div className='collapse'>
      <div className='collapse-wrapper'>
        <div className={`collapsible ${isOpen ? 'active' : ''}`} onClick={toggleOpen}>
      {title}
          <FontAwesomeIcon 
            icon={faChevronUp} 
          className={`arrow ${isOpen ? 'rotate' : ''}`} 
          />
        </div>
        <div className={`colapse-content ${isOpen ? 'open' : ''}`}>
          <div className={`content-inner ${isOpen ? 'open' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
      </>
    );
}
  
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
export default Collapse;