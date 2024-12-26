import React from 'react'
import BannerImg from '../Image/5.png'

function Banner() {
    return (
        <div>
            <div className="container  py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    {/* img section */}
                    <div className='flex justify-center  items-center'>
                        <img className='rounded-md' src={BannerImg} alt="" />
                    </div>
                    {/* text section */}
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-4xl font-semibold'>Food Is Always Good</h1>
                        <p className='p-4 font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita beatae at obcaecati odio, amet unde earum eligendi et, asperiores commodi sit perferendis laborum dolorem facere fugiat maxime. Nulla, beatae asperiores.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
