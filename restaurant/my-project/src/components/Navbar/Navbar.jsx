import React from 'react'

function Navbar() {
    return (
        <div className='py-4'>
            <div className="container flex justify-between items-center">
                {/* logo section*/}
                <div>
                    <p className='text-3xl font-semibold'>BELLA <span className=' text-orange-400'>VISTA</span> </p>
                </div>
                {/*Menu section */}
                <div className='flex justify-center items-center gap-10'>
                    <ul className='gap-8 hidden sm:flex '>
                        <li className='hover:border-b-2
                         border-orange-400  uppercase'>Home</li>
                        <li className='hover:border-b-2
                         border-orange-400  uppercase'>Menu</li>
                        <li className='hover:border-b-2
                         border-orange-400  uppercase'>About</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
