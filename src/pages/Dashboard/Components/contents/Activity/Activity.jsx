import React from 'react'
import Profile from './Profile/Profile'
import Highlith from './Highlihts/Highlihts';
import Recent from './Recent/Recent';

export default class Activity extends React.Component{
    render(){
        return(
            <>
            <section className="w-full h-screen p-4">
                <Profile />
                <Highlith />
                <Recent />
            </section>
            </>
        )
    }
}