import React, { useState } from 'react';
import SuccessNotification from '../SuccessNotification/SuccessNotification';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const ResetPasswordComponent = () => {
  const [email, setEmail] = useState('');

  const validateEmail = (adress) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(adress).toLowerCase());
  };

  const checkData = () => {
    if (validateEmail(email)) {
      verifyMail();
    } else {
      toast.error(<ErrorNotification message='Email invalide' />);
    }
  };

  const verifyMail = () => {
    axios
      .post('http://82.165.206.170/auth/password', {
        email: email,
      })
      .then((result) => {
        if (result.status === 200) {
          toast.success(
            <SuccessNotification
              message={`Un mail de confirmation a été envoyé à ${email},
              Veuillez suivre les instructions inscrites dans ce mail`}
            />
          );
        } else {
          toast.error(<ErrorNotification message='Erreur serveur' />);
        }
      })
      .catch((e) => {
        toast.error(
          <ErrorNotification
            message={`On ne reconnait pas votre email, veillez vous inscrire si vous n'avez pas de compte`}
          />
        );
        console.log(e.response);
      });
  };

  return (
    <>
      <main>
        <section className='absolute w-full h-full overflow-auto'>
          <div className='container mx-auto h-full'>
            <div className='flex content-center items-center justify-center h-full'>
              <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4'>
                <div className='relative bottom-14 flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-sm bg-gray-100 border-0 rounded-lg'>
                  <div className='rounded-t mb-0 px-6 py-4'>
                    <div className='text-center'>
                      <h2 className='text-gray-600 text-xl font-bold mb-4'>
                        Recuperation
                      </h2>
                      <p className='text-sm w-10/12 mx-auto mb-4'>
                        Entrez votre adresse email pour qu'on puisse envoyer les
                        instructions pour recuperer votre compte
                      </p>
                    </div>
                  </div>
                  <div className='flex-auto px-4 lg:px-4 py-10 pt-0'>
                    <div className='overflow-hidden transition-height duration-500 ease mb-4'>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          checkData();
                        }}
                      >
                        <div className='relative w-full mb-3'>
                          <label
                            className='block uppercase text-left text-gray-700 text-xs font-bold mb-2'
                            htmlFor='grid-password'
                          >
                            Adresse email
                          </label>
                          <input
                            type='email'
                            className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full'
                            placeholder='Adresse email'
                            style={{ transition: 'all .15s ease' }}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className='text-center mt-3'>
                          <button
                            className='bg-blue-500 text-white rounded-full active:bg-indigo-800 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-1/2'
                            style={{ transition: 'all .15s ease' }}
                          >
                            Envoyer
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className='text-center'>
                      <div className=''>                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer
          toastClassName='toast'
          position='top-center'
          autoClose={30000}
          showProgressBar
          newestOnTop={true}
          closeOnClick
        ></ToastContainer>
      </main>
    </>
  );
};

export default ResetPasswordComponent;
