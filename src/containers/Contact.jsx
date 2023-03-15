import React, { useRef, useState }  from 'react';
import emailjs from '@emailjs/browser';
import {Header, PageBanner, Footer} from '../components/index';

import { banner_img } from '../assets/index.js'

import { content } from '../utils/content';


const PAGE_NAME = 'contact';

const Treatments = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ignvbhe', 'template_r8nfn4k', form.current, 'Ihs0Yhe3ya9t15H8f')
      .then((result) => {
        console.log(result.text);
        setShowModal(true)
      }, (error) => {
        console.log(error.text);
        setShowModalError(true)
      });
  };

  return (
    <div className={PAGE_NAME}>
      <Header/>
      <PageBanner banner_image={banner_img} title="Contact" />
        <div className='section__padding'>
          <div className='container'>
            <div className="w-full max-w-md mx-auto">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_name">
                    Name
                  </label>
                  <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="from_name" name='from_name' placeholder='Name' required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
                    Email
                  </label>
                  <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_email" name='user_email' placeholder='Email address' required/>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea name="message" id="message" cols="30" rows="10" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ' placeholder='Leave me message here' required></textarea>

                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send
                  </button>
                </div>
              </form>
              <p className="text-center text-gray-500">
                Or call via {content.homeCTA.phone}
              </p>
            </div>
          </div>
        </div>

        {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 text-center">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-green-100 rounded-full">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Message is sent. 
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Jin will get back to you shortly.
                                        </p>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        {showModalError ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModalError(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 text-center">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Something went wrong. 
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Please try again or call <a href={'tel:'+content.homeCTA.phone}>{content.homeCTA.phone}</a>
                                        </p>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModalError(false)
                                                }
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
      <Footer/>
    </div>
  )
}

export default Treatments