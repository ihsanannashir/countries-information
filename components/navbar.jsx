import { Link } from "@chakra-ui/react"
import { BsFillMoonFill } from "react-icons/bs";
export default function Navbar() {

  const theme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
    <div className='bg-white dark:bg-dark-element w-screen flex justify-center drop-shadow-sm'>
        <div className='flex justify-between items-center py-6 w-[90%] md:w-[85%] xl:max-w-[1200px]'>
          <Link href={`/`}><div className='text-base md:text-lg text-light-text dark:text-white font-bold hover:none'>Where in the world?</div></Link>
          <div onClick={() => theme()} className='text-sm md:text-base font-semibold text-light-text dark:text-white flex items-center'>
            <BsFillMoonFill />
            <span className="pl-2">Dark Mode</span>
            </div>
        </div>
    </div>
    </>
  )
}
