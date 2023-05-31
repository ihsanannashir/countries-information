import './App.css'
import { Link } from 'react-router-dom'
import data from './json/data.json'
import PropTypes from 'prop-types';
import { BsSearch } from "react-icons/bs";

function CountriesCard(props) {
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
}

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

function App() {

  return (
    <>
    <div className='flex flex-col space-y-4 md:flex-row md:justify-between my-4'>
      <div className="relative block text-light-input dark:text-white shadow-lg shadow-gray-400/10 rounded-lg">
        <button type="submit" className="absolute inset-y-0 left-3 flex items-center pl-2">
          <BsSearch color='grey' size={18}/>
        </button>
        <input className="block w-full md:w-[430px] rounded-lg py-4 pl-14 pr-3 shadow-sm focus:outline-none text-sm" placeholder="Search for a country..." type="text" name="search"/>
      </div>

      <div>
      Filter
      </div>
    </div>

    <div className='my-6 flex flex-wrap justify-center lg:justify-between gap-y-12'>
      {data.map((item, idx) => {
        return <CountriesCard
          key={idx}
          id={idx}
          title={item.name}
          image={item.flags.svg}
          pop={item.population}
          region={item.region}
          capital={item.capital}
        />
      })}
    </div>
    </>
  )
}

export default App

// - Search for a country using an `input` field
// - Filter countries by region
// - Click through to the border countries on the detail page
// - Toggle the color scheme between light and dark mode *(optional)*