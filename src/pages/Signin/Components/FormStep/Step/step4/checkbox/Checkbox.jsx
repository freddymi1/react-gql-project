import React from 'react'

export const CheckBox = props => {
    return (
      <div className="w-full">
          <li className="inline-lock text-gray-500 cursor-pointer clear-right text-md font-bold bg-gray-200 px-2 py-1" type="button">
        <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
        </li>
      </div>
    )
}

export default CheckBox