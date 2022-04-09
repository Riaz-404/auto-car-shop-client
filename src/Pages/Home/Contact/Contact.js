import React from 'react';
import { showNotification } from "@mantine/notifications";
import { useForm, ValidationError } from '@formspree/react';
import contactImg from '../../../Images/undraw_contact_us_re_4qqt.svg'

const Contact = () => {
    const [state, handleSubmit] = useForm("mrgjygyb");
    const notification = (title, message, color) => {
        showNotification({
            title: title,
            message: message,
            autoClose: 4000,
            color: color,

        });
    }
    if (state.succeeded) {
        
        notification("Success", "Your message is sent", "green");
        window.location.reload(false);
    }
    return (
        <div className="m-9 p-5">
            <p style={{ fontSize: '40px', fontWeight: 'bold' }} className="my-9">CONTACT WITH US</p>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img style={{ height: '350px' }} src={contactImg} alt="" srcset="" />
                </div>
                {/* <form className='flex flex-col m-5' onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
                 */}
                <form className='px-5 py-3' onSubmit={handleSubmit}>
                    {/* <div className="col-span-6 sm:col-span-3 py-2"> */}
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        // onChange={e => setName(e.target.value)}
                        type="email"
                        name="Email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <label htmlFor="name" className="mt-1 block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        // onChange={e => setName(e.target.value)}
                        type="text"
                        name="Name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <label htmlFor="phone" className="mt-1 block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        // onChange={e => setName(e.target.value)}
                        type="tel"
                        name="Phone Number"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <label className="block text-sm font-medium text-gray-700">
                        Your Message Here
                    </label>
                    <textarea
                        name="Message"
                        rows={5}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={''}
                    />
                    <button type="submit" disabled={state.submitting} class="my-2 py-2 px-3 text-sm text-white bg-gray-900 hover:bg-gray-700 rounded-md">
                        SUBMIT
                    </button>


                </form>
            </div>

        </div>

    );
};

export default Contact;