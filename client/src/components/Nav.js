function Nav() {
  return (
    <div className='flex justify-between h-fit w-full items-center'>
        <div>
            <h1 className='text-4xl font-bold text-slate-700'><span className='text-blue-600 text-4xl'>!</span>Calc</h1>
        </div>
        <div>
            <button className='w-fit h-fit bg-blue-600 py-1 px-2 rounded-lg text-white'>Logout</button>
        </div>
    </div>
  )
}

export default Nav