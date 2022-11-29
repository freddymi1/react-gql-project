import React, { Component, useState } from 'react'
//import './App.css'
import  CheckBox  from './checkbox/Checkbox'
import Filiere from './Filiere/Filiere'
import Select from 'react-select';



class Step4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      niveaux: [
        {id: 1, value: "Bac +1", isChecked: false},
        {id: 2, value: "Bac +2", isChecked: false},
        {id: 3, value: "Bac +3", isChecked: false},
        {id: 4, value: "Bac +4", isChecked: false},
        {id: 5, value: "Bac +5", isChecked: false}
      ]
    }
  }
  
  handleAllChecked = (event) => {
    let niveaux = this.state.niveaux
    niveaux.forEach(niveau => niveau.isChecked = event.target.checked) 
    this.setState({niveaux: niveaux})
  }

  handleCheckChieldElement = (event) => {
    let niveaux = this.state.niveaux
    niveaux.forEach(niveau => {
       if (niveau.value === event.target.value)
       niveau.isChecked =  event.target.checked
    })
    this.setState({niveaux: niveaux})
  }

  render() {
    return (
      <>
      <div className="w-full">
        <div className='w-full  pt-8 space-y-4'>
          <label className="text-xl pb-4 text-gray-500">
              Quelle est ton niveau d'etude ?
          </label>
          {/* <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All */}
            <ul className="space-x-4 flex w-full text-gray-500">
            {
              this.state.niveaux.map((niveau) => {
                return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...niveau} />)
              })
            }
            </ul>
        </div>
        <div className="w-full">
          <Filiere />
        </div>
        
          
      </div>
      </>
    );
  }
}

export default Step4