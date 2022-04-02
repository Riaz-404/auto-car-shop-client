import React, { useState } from 'react'
import {
    ShoppingCartIcon
} from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import car1 from "../../../../Images/car-1.jpg";


const cars = [
    {
        _id: 1,
        name: 'VOLKSWAGEN SCIROCCO 2016',
        price: '$20000',
        image: car1,
        fuel: 'Petrol',
        deliveryTime: 'within a month',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum et ullam soluta rerum. Nostrum, corrupti repudiandae adipisci cupiditate dicta iure reprehenderit dolorum veniam eveniet velit odio totam deleniti rem soluta. Autem quaerat excepturi suscipit earum numquam perferendis iusto, asperiores veritatis hic provident explicabo natus ut facere distinctio laboriosam amet, fugiat, deserunt obcaecati error. Laudantium sunt distinctio quae adipisci rerum at dignissimos est? Rem expedita culpa illo harum autem debitis ex accusantium. Recusandae laborum, ex nihil voluptates pariatur fuga facere sunt similique ipsum odio perferendis nisi esse quod nobis autem reiciendis quae cum corrupti qui sint ea? Fugiat iste sint molestias inventore eius error illo quod optio? Inventore et suscipit illo hic. Voluptatum mollitia id ratione ipsam neque ipsa sequi nemo dolor possimus, quis impedit hic inventore ut molestiae est. Veritatis, nulla cumque suscipit reiciendis maiores recusandae distinctio ipsa tenetur nobis iure inventore incidunt eveniet, aspernatur impedit corporis fugit, delectus obcaecati adipisci. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa architecto sapiente soluta veniam, rerum aperiam laudantium amet fugit! Officiis tempore aliquid amet deserunt. Deleniti, ea aut voluptatem perferendis enim commodi. Numquam quidem itaque voluptatum fugiat iste rerum eum odit enim alias consectetur qui nobis explicabo et ducimus deserunt consequatur, quam iusto nisi animi! In, cum quae. Quasi dolorem, doloribus aliquid soluta delectus est sequi perspiciatis minima ipsa aspernatur! Beatae, excepturi assumenda consequatur exercitationem officiis cupiditate magnam omnis voluptatum, magni sapiente veritatis inventore amet error cumque nulla ipsum dolore perferendis recusandae itaque alias, vitae earum commodi quod ipsam! Nesciunt, tempora alias! Rerum itaque omnis ea, harum quod at, explicabo unde atque saepe maxime nisi maiores a consequatur non nulla doloremque soluta fugit vero quibusdam delectus iste distinctio. Tenetur id dolorem, provident nesciunt delectus pariatur impedit ducimus, eligendi, dicta facere nemo voluptatibus. Ducimus vero architecto, nulla placeat maxime provident quidem ea, quae facere a dicta eius tenetur consectetur praesentium odit aut obcaecati, saepe animi vitae maiores suscipit! Facere eveniet porro non a, exercitationem velit quasi eum optio sequi eaque at? Reprehenderit amet temporibus eum sapiente harum laborum praesentium eius ipsum porro qui officia, quidem, recusandae, saepe itaque sunt facilis aliquid nisi obcaecati. Sequi dicta id quas eius dolore quos quis aut mollitia pariatur iure illum debitis, enim illo voluptatum odio beatae aperiam! Sequi impedit beatae eligendi nostrum aliquid adipisci consectetur? Mollitia magnam minus quae aliquam exercitationem id voluptates illo deleniti recusandae maiores atque est nemo cumque, possimus nisi expedita iure quibusdam aliquid voluptatem nobis assumenda eius doloribus corrupti! Aut, quas! Veritatis, nulla molestias laudantium similique laborum sed debitis consectetur distinctio ut, autem obcaecati. Mollitia sint laboriosam nesciunt voluptas, voluptatem iure debitis corporis officiis cupiditate dignissimos ipsa recusandae dolorem provident velit harum dolor consequuntur repellat laudantium deleniti amet beatae vel praesentium tempore. Velit maxime aspernatur vero aliquam nisi, vel ratione tempore optio minima, animi dolorem sit! Non repellat id, dolor quas placeat quidem dolores hic cum, aliquid commodi, quibusdam molestiae incidunt dolore similique amet? Quisquam, quisquam.",
    }
]
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Details = () => {
    const [selectedColor, setSelectedColor] = useState(cars[0].colors[0])
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Product info */}
                <div className="max-w-2xl mx-auto pt-10 pb-6 px-4 sm:px-6 lg:max-w-7xl lg:pt-6 lg:pb-6 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">

                    {/* Image gallery */}

                    <div className="mt-6 max-w-2xl mx-auto col-span-2">
                        <div className="rounded-lg overflow-hidden lg:block">
                            <img
                                src={cars[0].image}
                                alt={cars[0].name}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>


                    



                    {/* Options */}
                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only">Product information</h2>
                        <div className="lg:col-span-2 lg:pr-8">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{cars[0].name}</h1>
                        </div>
                        <p className="text-3xl text-gray-900">{cars[0].price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <form className="mt-4">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                    <div className="flex items-center space-x-3">
                                        {cars[0].colors.map((color) => (
                                            <RadioGroup.Option
                                                key={color.name}
                                                value={color}
                                                className={({ active, checked }) =>
                                                    classNames(
                                                        color.selectedClass,
                                                        active && checked ? 'ring ring-offset-1' : '',
                                                        !active && checked ? 'ring-2' : '',
                                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                                    )
                                                }
                                            >
                                                <RadioGroup.Label as="p" className="sr-only">
                                                    {color.name}
                                                </RadioGroup.Label>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        color.class,
                                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                                    )}
                                                />
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex flex-row">
                                    <h3 className="text-sm text-gray-900 w-64 font-medium">Pick A Delivery Date: </h3>
                                    <DatePicker className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" dateFormat="dd MMMM yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />

                                </div>







                            </div>

                            <button
                                type="submit"
                                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <ShoppingCartIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                Add to cart
                            </button>
                        </form>
                    </div>
                    
                </div>

                <div className="max-w-2xl mx-auto pt-10 pb-6 px-4 sm:px-6 lg:max-w-7xl lg:pt-6 lg:pb-6 lg:px-8">
                    {/* Description and details */}
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Description</h1>

                        <div className="space-y-6 pt-4">
                            <p className="text-base text-gray-900">{cars[0].description}</p>
                        </div>
                    </div>


                </div>
            </div>

        </div >
    )
}

export default Details;