import React, { useState, useRef } from 'react';
import SuccessNotification from './components/SuccessNotification/SuccessNotification';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { ChangePasswordComponent } from './components/ChangePasswordComponent';

// PUT /auth/password Requires: password, password_confirmation

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const queryString = window.location.search;
  // console.log(queryString);

  const queryArray = [];
  queryString
    .substring(1)
    .split('&')
    .map((element) => {
      queryArray.push(element.split('='));
    });

  const constructObject = (arr) => {
    return arr.reduce((acc, val) => {
      const [key, value] = val;
      acc[key] = value;
      return acc;
    }, {});
  };

  const queryObject = constructObject(queryArray);
  const accessToken = queryObject['access-token'];
  const client = queryObject['client'];
  const uid = queryObject['uid'].replace('%40', '@');

  // console.log('client', client, 'access-token', accessToken, 'uid', uid);
  // console.log(queryObject['uid']);
  // console.log(queryObject);

  const sendChangePassword = () => {
    axios({
      method: 'put',
      url: 'http://82.165.206.170/auth/password',
      data: {
        password: password,
        password_confirmation: passwordConfirmation,
      },
      headers: { 'access-token': accessToken, client: client, uid: uid },
    })
      .then((result) => {
        if (result.status === 200) {
          toast.success(
            <SuccessNotification
              message={`Votre mot de passe a ete modifier avec succes`}
            />
          );
          setTimeout(() => (window.location.href = '/login'), 3000);
        } else {
          toast.error(<ErrorNotification message='Erreur serveur' />);
        }
      })
      .catch((e) => {
        toast.error(<ErrorNotification message={`Probleme`} />);
        console.log(e.response);
      });
  };

  return (
    <>
      <main>
        <ChangePasswordComponent 
          onSubmit={ sendChangePassword } 
          onChangePassword={ setPassword } 
          onChangePasswordConfirmation={ setPasswordConfirmation } 
        />
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

export default ChangePassword;
