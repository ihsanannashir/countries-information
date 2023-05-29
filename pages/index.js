import { Inter } from 'next/font/google'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data, error } = useSWR('/api/staticdata', fetcher);
  const countries = JSON.parse(data)

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>

  return (
    <>
    <div className='font-semibold'>Halooo {typeof countries}</div>
    {countries.map((item, idx) => {
      return <div key={idx}>{item.name}</div>
    })}
    </>
  )
}
