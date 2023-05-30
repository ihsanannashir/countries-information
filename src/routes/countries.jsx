import data from '../json/data.json'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import {countries as contParse} from 'country-data';

export default function Countries() {
    let { countriesId } = useParams();
    const cont = data[countriesId]

    // const contId = data.map((item, idx) => {
    //   return item.alpha3Code
    // })

  return (
    <div className='space-y-10'>
      <Link to={`/`}>
        <div className='bg-white dark:bg-dark-element flex flex-row w-28 py-2 shadow-lg rounded-sm mt-8 items-center justify-center space-x-2'>
          <BsArrowLeft size={18}/>
          <span className='font-semibold text-sm'>Back</span>
        </div>
      </Link>

      <div className='w-full h-[25%] bg-slate-700'>
        <img
          src={cont.flags.png}
          alt={cont.name}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='space-y-8'>
        <div className='font-bold text-2xl'>{cont.name}</div>

        <div className='text-sm space-y-2'>
          <div><span className='font-semibold'>Native Name:</span> {cont.nativeName}</div>
          <div><span className='font-semibold'>Population:</span> {cont.population.toLocaleString("en-US")}</div>
          <div><span className='font-semibold'>Region:</span> {cont.region}</div>
          <div><span className='font-semibold'>Sub Region:</span> {cont.subregion}</div>
          <div><span className='font-semibold'>Capital:</span> {cont.capital}</div>
        </div>

        <div className='text-sm space-y-2'>
          <div><span className='font-semibold'>Top Level Domain:</span> {cont.topLevelDomain}</div>
          <div>
            <span className='font-semibold'>Currencies: </span>
            {cont.currencies.map((item, idx) => {
              if (idx === cont.currencies.length - 1) {
                return <span key={idx}>{item.name}</span>
              }
              return <span key={idx}>{item.name},</span>
            })}
          </div>
          <div>
            <span className='font-semibold'>Languages: </span>
            {cont.languages.map((item, idx) => {
              if (idx === cont.languages.length - 1) {
                return <span key={idx}>{item.name}</span>
              }
              return <span key={idx}>{item.name}, </span>
            })}
          </div>
        </div>
        
        <div className='flex flex-col'>
          <div className='font-semibold text-lg'>Border Countries:</div>
          <div className='mt-2 mb-6 flex flex-wrap gap-3'>
            {cont.borders.map((item, idx) => {
              return <span key={idx} className='bg-white dark:bg-dark-element px-4 py-2 shadow-md text-sm'>{contParse[item].name}</span>
            })}
          </div>
        </div>
        
      </div>
    </div>
  )
}
