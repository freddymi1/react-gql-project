import React from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = ({
  setEmail,
  setPassword,
  postLogin,
  password,
  email,
}) => {
  return (
    <>
      <section className="absolute w-full h-full">
        <div className="container mx-auto h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
              <div className="relative bottom-14 flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-sm bg-gray-100 border-0 rounded-lg">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h2 className="text-gray-600 text-xl font-bold">LOG IN</h2>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-4 py-10 pt-0">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Adresse email
                      </label>
                      <input
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Adresse email"
                        style={{ transition: 'all .15s ease' }}
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Mot de passe
                      </label>

                      <input
                        type="password"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Mot de passe"
                        style={{ transition: 'all .15s ease' }}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="text-center mt-8">
                      <button
                        className="bg-blue-500 text-white rounded-full active:bg-indigo-800 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                        onClick={postLogin}
                      >
                        Se connecter
                      </button>
                    </div>
                    <div className="flex flex-wrap mt-4">
                      <div className="w-1/2">
                        <Link
                          to="/password-reset"
                          className="text-blue-500 font-bold hover:underline"
                        >
                          <small>Mot de passe oublié ?</small>
                        </Link>
                      </div>
                      <div className="w-1/2 text-right">
                        <Link
                          to="/register"
                          className="text-blue-500 font-bold hover:underline"
                        >
                          <small>S'inscrire</small>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
