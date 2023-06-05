import './App.css'
import { Link } from 'react-router-dom'
import data from './json/data.json'
import PropTypes from 'prop-types';
import { BsSearch, BsChevronDown } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

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

const regionFilter = [
  { region: 'Africa' },
  { region: 'America' },
  { region: 'Asia' },
  { region: 'Europe' },
  { region: 'Oceania' },
]

function App() {

  return (
    <>
    <div className='flex flex-col md:flex-row md:justify-between my-4 space-y-8 md:space-y-0'>
      <div className="relative text-light-input dark:text-white shadow-lg shadow-gray-400/10 rounded-lg">
        <button type="submit" className="absolute inset-y-0 left-3 flex items-center pl-2">
          <BsSearch color='grey' size={18}/>
        </button>
        <input className="w-full md:w-[430px] rounded-lg py-4 pl-14 pr-3 shadow-sm focus:outline-none text-sm" placeholder="Search for a country..." type="text" name="search"/>
      </div>

      <Menu matchWidth={true}>
        <MenuButton className='bg-white dark:bg-dark-element text-sm w-[225px] dark:text-white shadow-lg shadow-gray-400/10 rounded-lg font-semibold  h-12 md:h-auto' px={0} my={0}>
          <div className='flex justify-between mx-4 items-center'>
            <span>Filter by Region</span>
            <BsChevronDown />
          </div>
        </MenuButton>
        <MenuList borderWidth='0px' py={1} px={0} borderRadius='lg' className='rounded-lg shadow-lg shadow-gray-400/10'>
          {regionFilter.map((item, idx) => {
            return <MenuItem key={idx} fontWeight='semibold' fontSize='sm' w={'full'} my={0} mx={0}>{item.region}</MenuItem>
          })}
        </MenuList>
      </Menu>

    </div>

    <div className='my-8 flex flex-wrap justify-center lg:justify-between gap-y-12'>
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