import React, { Component, useState } from 'react'
//import './App.css'
//import  CheckBox  from './checkbox/Checkbox'
import Language from './Language/language'
import Select from 'react-select';

const options=[
  {value:'devfrontend', label:'Dev.Font-End'},
  {value:'devbackend', label:'Dev.back-End'},
  {value:'productdesign', label:'Product Design'},
  {value:'datascience', label:'Data Science'},
  {value:'devmobile', label:'Dev.Mobile'},
  {value:'ux/uidesigner', label:'UI/IX Designer'},
  {value:'autre', label:'Autre'}
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '2px dotted green',
    color: state.isSelected ? 'white' : 'gray',
    backgroundColor: state.isSelected ? 'blue' : 'white'
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
  })
}

class Step10 extends Component {
  
  render() {
    return (
      <>
      <div className="w-full">
        <div className='w-full  pt-8 space-y-4'>
          <label className="text-xl pb-4 text-gray-500">
            Venons-en aux faits, par quelle(s) compétence(s) es-tu intéressé(e) ? Cette question est requise*
          </label>
          <div>
            <Select 
              className="w-full h-16 text-lg font-bold text-gray-500 bg-transparent mt-2 outline-none focus:outline-none"
              options={options}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="w-full">
          <Language />
        </div>
          
      </div>
      </>
    );
  }
}

export default Step10