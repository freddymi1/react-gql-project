import React from 'react';
import { RiFilePpt2Line } from 'react-icons/ri';
export default class Sidebar extends React.Component{
    render(){
        return(
            <>
                <div className="py-4">
                    <div className="mx-auto bg-white">
                        <div className="text-left ml-2">
                            <div className="font-bold text-gray-500 text-lg cursor-pointer font-bold hover:text-blue-500"
                            style={{ transition: 'all .4s ease' }}
                            >How today </div>
                        </div>
                        <div className="text-lg text-gray-500 px-2 pt-4">
                            <ul className="space-y-2">
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            Why do we write return 0; at the end??
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            Problem!
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            Помогите пожалуйста решить задачу Fizzbuzz
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            Can i get mingw offline installer for my windows?
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            Plz help me to solve one code
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            HTML EMAIL FORMS
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            Guys how to delete a number from array????Help
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            How to create grocery list in java
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            What’s wrong with this??
                                        </span>
                                    </a>
                                </li>
                                <li className="space-x-3">
                                    <a className="text-gray-400 space-x-3" style={{fontSize:"1rem"}}>
                                        <RiFilePpt2Line className="inline" size="1.5em"/>
                                        <span className="text-sm cursor-pointer hover:text-blue-400" style={{transition:"all .4s"}}>
                                            Mmmmm k riko
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}