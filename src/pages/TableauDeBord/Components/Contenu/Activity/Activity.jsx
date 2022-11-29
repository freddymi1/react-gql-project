import React from 'react'
import Profile from './Profile/Profile'
import Highlith from './Highlihts/Highlihts';
import Dashboard from './Dashboard/Dashboard';
import Yourgoal from './Yourgoal/Yourgoal';
import Recent from './Recent/Recent';

export default class Activity extends React.Component{
    render(){
        return(
            <>
            <section className="w-full h-screen p-4">
                <Profile />
                <Highlith />
                <Dashboard />
                <Yourgoal />
                <Recent />
            </section>
            </>
        )
    }
}