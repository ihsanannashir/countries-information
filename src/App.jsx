import './App.css'
import data from './json/data.json'
import { BsSearch, BsChevronDown } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { useState } from 'react';
import CountriesCard from '../components/CountriesCard';

const regionFilter = [
  { region: 'Africa', display: 'Africa' },
  { region: 'Americas', display: 'America' },
  { region: 'Asia', display: 'Asia' },
  { region: 'Europe', display: 'Europe' },
  { region: 'Oceania', display: 'Oceania' },
]

function App() {
  const [regions, setRegions] = useState(data)

  function getRegion (cont) {
    const newData = data.filter((item) => {
      return item.region === cont
    })
    setRegions(newData)
  }

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
            return <MenuItem
              key={idx}
              fontWeight='semibold'
              fontSize='sm' w={'full'}
              my={0}
              mx={0}
              onClick={() => getRegion(item.region)}
              >{item.display}</MenuItem>
          })}
        </MenuList>
      </Menu>

    </div>

    <div className='my-8 flex flex-wrap justify-center lg:justify-between gap-y-12'>
      {regions.map((item, idx) => {
        return <CountriesCard
          key={idx}
          id={item.numericCode}
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
// - Click through to the border countries on the detail page
// - Toggle the color scheme between light and dark mode *(optional)*