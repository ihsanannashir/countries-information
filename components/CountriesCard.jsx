import { memo } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const CountriesCard = memo((props) => {
    return (
      <div className="rounded-md bg-white dark:bg-dark-element w-[80%] md:w-[250px] mx-4 lg:m-0 shadow-md transition duration-300 ease-in-out hover:scale-105">
        <Link to={`./countries/${props.id}`}>
          <img
              src={props.image}
              alt={props.title}
              className="rounded-t-md object-cover md:h-[167px] md:w-[250px] w-full"
          />
          <div className="px-4 pt-4 pb-2 relative">
            <h2 className="font-bold">{props.title}</h2>
            <div className='text-sm my-3'>
              <div><span className='font-semibold'>Population:</span> {props.pop.toLocaleString("en-US")}</div>
              <div><span className='font-semibold'>Region:</span> {props.region}</div>
              <div><span className='font-semibold'>Capital:</span> {props.capital}</div>
            </div>
          </div>
        </Link>
      </div>
    )
  })
  
  CountriesCard.displayName = 'CountriesCard'
  
  CountriesCard.propTypes = {
    id: PropTypes.any,
    title: PropTypes.string,
    image: PropTypes.string,
    pop: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
  };
  
  CountriesCard.defaultProps = {
    title: 'No Name',
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    pop: 'unknown',
    region: 'N/A',
    capital: 'N/A',
  };

  export default CountriesCard;