import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import moment from 'moment';

import { ToastContainer, toast } from 'react-toastify'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ErrorNotification from './components/ErrorNotification/ErrorNotification'
import SuccessNotification from './components/SuccessNotification/SuccessNotification'

import { UPDATE_STUDENT_INFOS } from '../../../../../../../../services/mutations/MutationsStudents';


const currentUser = sessionStorage.getItem("currentUser");


var range = function(start, end, step) {

  console.log("IIIIIIIIIIIIIIIIIIIII", start, end)
  var range = [];
  var typeofStart = typeof start;
  var typeofEnd = typeof end;

  if (step === 0) {
      throw TypeError("Step cannot be zero.");
  }

  if (typeofStart == "undefined" || typeofEnd == "undefined") {
      throw TypeError("Must pass start and end arguments.");
  } else if (typeofStart != typeofEnd) {
      throw TypeError("Start and end arguments must be of same type.");
  }

  typeof step == "undefined" && (step = 1);

  if (end < start) {
      step = -step;
  }

  if (typeofStart == "number") {

      while (step > 0 ? end >= start : end <= start) {
          range.push(start);
          start += step;
      }

  } else if (typeofStart == "string") {

      if (start.length != 1 || end.length != 1) {
          throw TypeError("Only strings with one character are supported.");
      }

      start = start.charCodeAt(0);
      end = end.charCodeAt(0);

      while (step > 0 ? end >= start : end <= start) {
          range.push(String.fromCharCode(start));
          start += step;
      }

  } else {
      throw TypeError("Only string and number types are supported");
  }

  return range;

}


const InfosEditor = (props) => {
  console.log("DDDDDDDDDDDDDDDDDDDDDD", moment().format("YYYY"))
  const years = range(1990, parseInt(moment().format("YYYY")), 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const [ firstName, setFirstName ] = useState(JSON.parse(currentUser).data.data.first_name)
  const [ lastName, setLastName ] = useState(JSON.parse(currentUser).data.data.last_name)
  const [ email, setEmail ] = useState(JSON.parse(currentUser).data.data.email)
  const [ gender, setGender ] = useState(JSON.parse(currentUser).data.data.gender)
  const [ birthday, setBirthday ] = useState(new Date(JSON.parse(currentUser).data.data.birthday))

  const [ updateStudentInfos ] = useMutation(
    UPDATE_STUDENT_INFOS, 
    { 
      onCompleted: () => window.location.href = window.location.href, 
      ignoreResults: false 
    }
  )

  const InputBirthday = ({ value, onClick }) => (
    <div className="flex w-full max-w-sm space-x-3 mb-5">
      <input  onClick={onClick} defaultValue={ value } className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="Date de naissance"/>
    </div>
  )

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const checkData = () => {
    if(validateEmail(email)){
      toast.success(<SuccessNotification message="Informations sauvagerdees avec succees" />)
      updateStudentInfos({
        variables: {
          id: JSON.parse(currentUser).data.data.id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          birthday: moment(birthday).format("YYYY-MM-DD hh:mm:ss"),
          gender: gender,
          image: props.avatar
        }
      })
      let newCurrentUser = JSON.parse(currentUser)
      newCurrentUser.data.data.image = props.avatar
      newCurrentUser.data.data.name = lastName + " " + firstName
      newCurrentUser.data.data.first_name = firstName
      newCurrentUser.data.data.last_name = lastName
      newCurrentUser.data.data.birthday = moment(birthday).format("YYYY-MM-DD hh:mm:ss")
      newCurrentUser.data.data.gender = gender
      sessionStorage.setItem("currentUser", JSON.stringify(newCurrentUser))
    } else {
      toast.error(<ErrorNotification message="Email invalide" />)
    }
  }


  return(
    <div className="flex w-2/4 md:3/4 m-2">
      <form 
        className="w-full" 
        onSubmit={ 
          e => { 
            e.preventDefault()
            checkData()
          } 
        }
      >

        <div className="flex w-full max-w-sm space-x-3 mb-5">
          <input onChange={ e => setFirstName(e.target.value) } defaultValue={ firstName } className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="Nom"/>
        </div>

        <div className="flex w-full max-w-sm space-x-3 mb-5">
          <input onChange={ e => setLastName(e.target.value) } defaultValue={ lastName } className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="text" placeholder="Prenom"/>
        </div>

        <div className="flex w-full max-w-sm space-x-3 mb-5">
          <input onChange={ e => setEmail(e.target.value) } defaultValue={ email } className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="email" placeholder="Email"/>
        </div>

        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center"
              }}
            >
              <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <select
                value={ parseInt(moment(date).format("YYYY")) }
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
    
              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
    
              <button  type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>
            </div>
          )}
          selected={ birthday }
          dateFormat="dd/MM/yyyy"
          onChange={date => setBirthday(date)}
          customInput={<InputBirthday />}
        />

        <div className="flex flex-row mb-5">
          <label className="inline-flex items-center mt-3 shadow-md rounded-lg bg-white py-2 px-4">
            <input 
              onChange={ e => setGender(e.target.value) }  
              type="radio" 
              name="quizz26" 
              className="form-radio h-5 w-5 text-indigo-600" 
              value="homme" 
              defaultChecked={ gender === "homme" }
            />
            <span className="font-light ml-2 text-gray-700">Homme</span>
          </label>
          <label className="inline-flex items-center mt-3 ml-5 shadow-md rounded-lg bg-white py-2 px-4">
            <input 
              onChange={ e => setGender(e.target.value) }  
              type="radio" 
              name="quizz26" 
              className="form-radio h-5 w-5 text-indigo-600" 
              value="femme" 
              defaultChecked={ gender === "femme" }
            />
            <span className="font-light ml-2 text-gray-700">Femme</span>
          </label>
        </div>

        <div className="flex w-full max-w-sm space-x-3 mb-5">
          <button className="flex-shrink-0 bg-green-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200" type="submit">
            Mettre a jour
          </button>
        </div>
      </form>
      <ToastContainer 
        toastClassName="toast"
        position="top-center"
        autoClose={15000}
        showProgressBar
        newestOnTop={true}
        closeOnClick
      >
      </ToastContainer>
    </div>
  )
}

export default InfosEditor