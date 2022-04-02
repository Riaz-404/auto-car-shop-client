import React from 'react';

const Product = ({product}) => {
    const { name, price, image } = product;
    return (
        <div>
            <div className="relative w-full md:h-80 sm:h-50 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h2 className="mt-6 text-xl text-gray-600">
                <span />
                  {name}


              </h2>
              <span className="font-semibold text-gray-900">{price}</span>


        </div>
    );
};

export default Product;