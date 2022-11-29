import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

import ErrorNotification from '../ErrorNotification/ErrorNotification';
import SuccessNotification from '../SuccessNotification/SuccessNotification';

export default class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkData() {
    if (this.validateEmail(this.state.email)) {
      if (this.state.password.length <= 6) {
        toast.error(
          <ErrorNotification message='Le mot de passe doit contenir au moins 6 caracteres' />
        );
      } else {
        if (this.state.password === this.state.password_confirmation) {
          this.signup();
          return <Redirect to={'/confirmation'} />;
        } else {
          toast.error(
            <ErrorNotification message='Les mots de passe ne correspondent pas!' />
          );
        }
      }
    } else {
      toast.error(<ErrorNotification message='Email invalide' />);
    }
  }

  signup() {
    axios
      .post('http://82.165.206.170/auth', {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      })
      .then((result) => {
        if (result.status === 200) {
          // sessionStorage.setItem(
          //   'currentUser',
          //   JSON.stringify({ data: result.data, authData: result.headers })
          // );
          console.log(result.data.data.email);
          toast.success(
            <SuccessNotification
              message={`Une mail de confirmation a ete envoye a ${result.data.data.email}. 
            Veuillez suivre les intructions inscrites dans ce mail avant de se connecter`}
            />
          );
          setTimeout(() => (window.location.href = '/confirmation'), 10000);
        } else {
          toast.error(<ErrorNotification message='Erreur serveur' />);
        }
      })
      .catch((e) => {
        toast.error(
          <ErrorNotification
            message={`${e.response.data.errors.full_messages.toString()}`}
          />
        );
        console.log(e.response.data.errors.full_messages);
      });
  }
  render() {
    return (
      <>
        <main>
          <section className='absolute w-full h-full'>
            <div className='container mx-auto h-full'>
              <div className='flex content-center items-center justify-center h-full'>
                <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4'>
                  <div className='relative bottom-14 flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-sm bg-gray-100 border-0 rounded-lg'>
                    <div className='rounded-t mb-0 px-6 py-6'>
                      <div className='text-center mb-3'>
                        <h2 className='text-gray-600 text-xl font-bold'>
                          INSCRIPTION
                        </h2>
                      </div>
                      <hr className='mt-6 border-b-1 border-gray-400' />
                    </div>
                    <div className='flex-auto px-4 lg:px-4 py-10 pt-0'>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          this.checkData();
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
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </div>

                        <div className='relative w-full mb-3'>
                          <label
                            className='block uppercase text-left text-gray-700 text-xs font-bold mb-2'
                            htmlFor='grid-password'
                          >
                            Mot de passe
                          </label>
                          <input
                            type='password'
                            className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full'
                            placeholder='Mot de passe'
                            style={{ transition: 'all .15s ease' }}
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                          />
                        </div>
                        <div className='relative w-full mb-3'>
                          <label
                            className='block uppercase text-left text-gray-700 text-xs font-bold mb-2'
                            htmlFor='grid-password'
                          >
                            Confirmation mot de passe
                          </label>
                          <input
                            type='password'
                            className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full'
                            placeholder='Confirmation mot de passe'
                            style={{ transition: 'all .15s ease' }}
                            onChange={(e) =>
                              this.setState({
                                password_confirmation: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className='text-center mt-6'>
                          <button
                            className='bg-blue-500 text-white rounded-full active:bg-indigo-800 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                            style={{ transition: 'all .15s ease' }}
                          >
                            S'enregistrer
                          </button>
                        </div>
                      </form>
                      <Link
                        to='/login'
                        className='text-blue-500 font-bold hover:underline'
                      >
                        <small>Se connecter</small>
                      </Link>
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
  }
}
