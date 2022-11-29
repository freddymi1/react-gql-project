import React from 'react';

import FormStep from './Components/FormStep/FormStep';
export default class Signin extends React.Component{
    render(){
        return(
            <>
                <section className="w-full bg-gray-50 h-screen space-y-4 pb-32 overflow-auto">
                    
                    <div className="container pt-3 px-6 mx-auto">
                        <div className="w-full mx-auto">
                            <FormStep />
                        </div>
                    </div>
                    
                </section>
            </>
        )
    }
}