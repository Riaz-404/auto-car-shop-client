import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';

const ListItems = ({product, classNames }) => {
    return (
        <div>
            <Listbox.Option
                key={product._id}
                className={({ active }) =>
                    classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                    )
                }
                value={product}
            >
                {({ selected, active }) => (
                    <>
                        <div className="flex items-center">
                            {/* <img src={product.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" /> */}
                            <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                                {product.carName}
                            </span>
                        </div>

                        {selected ? (
                            <span
                                className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                            >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) : null}
                    </>
                )}
            </Listbox.Option>
        </div>
    );
};

export default ListItems;