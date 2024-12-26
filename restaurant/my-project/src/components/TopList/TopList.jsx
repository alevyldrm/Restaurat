import React from 'react'
import Image1 from '../Image/2.jpg'
import Image2 from '../Image/3.jpg'
import Image3 from '../Image/b.jpg'

const FoodData = [
    {
        image: Image1,
        rating: "⭐⭐⭐⭐⭐",
        price: "$12.99",
        name: "Food Name",
        decs: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, beatae amet consectetur?"
    },
    {
        image: Image3,
        rating: "⭐⭐⭐⭐⭐",
        price: "$15.99",
        name: "Food Name",
        decs: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, beatae amet consectetur?"
    },
    {
        image: Image2,
        rating: "⭐⭐⭐⭐⭐",
        price: "$10.99",
        name: "Food Name",
        decs: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, beatae amet consectetur?"
    }
]

function TopList() {
    return (
        <div className='container py-14 '>
            {/* header section */}
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-semibold'>Top List</h1>
                <p className='text-gray-700 mt-5'>Our Top List</p>
            </div>
            {/* card section */}
            <div className='grid grid-cols-1 rounded-md md:grid-cols-3 gap-6 '>
                {FoodData.map((item, index) =>
                    <div key={index} className='bg-white/50 cursor-pointer shadow-lg p-5 sm:p-3 rounded-3xl hover:scale-105
                    transation duration-300'>
                        <img
                            src={item.image}
                            alt=""
                            className='w-60 sm:w-40 sm:h-40 max-auto object-cover rounded-full image-shadow'
                        />
                        <div className='space-y-2 mt-5'>
                            <p className='text-red-500'>
                                {item.rating}
                            </p>
                            <p className='text-lg font-semibold'>
                                {item.name}
                            </p>
                            <p className='text-gray-700'>{item.decs}</p>
                            <p className='text-lg font-semibold'>{item.price}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TopList
