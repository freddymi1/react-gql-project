import React from 'react'

export const CheckBox = props => {
    return (
      <>
          <li className="w-1/3 text-gray-500 cursor-pointer clear-right text-md font-bold bg-gray-200 px-4 py-1" type="button">
            <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
          </li>
      </>
    )
}

export default CheckBox