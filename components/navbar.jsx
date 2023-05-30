export default function Navbar() {
  return (
    <div className='bg-white dark:bg-dark-element w-screen flex justify-center drop-shadow-sm'>
        <div className='flex justify-between items-center py-6 w-[90%] md:w-[85%] xl:max-w-[1200px]'>
            <div className='text-base md:text-lg font-bold'>Where in the world?</div>
            <div className='text-sm md:text-base font-semibold'>Dark Mode</div>
        </div>
    </div>
  )
}
