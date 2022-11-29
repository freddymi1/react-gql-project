import React from 'react';
import CourseContent from './CourseContent';
import Progressbar from './components/Progressbar/Progressbar';
import Button from './Button';  
import Title from './components/Title/Title';


export default class Course extends React.Component{
  render() {
    return (
      <>
        <section className="bg-white">
          <div className="container pt-3 pb-6 px-6 mx-auto">
            <Progressbar/>
          </div>
        </section>
        {/* Section Titre */}
        <section className="bg-white">
          <div className="container pt-3 pb-6 px-6 mx-auto">
            <Title/>
          </div>
        </section>
        {/* Fin Section Titre */}
        {/* Section Titre */}
        <section className="bg-white">
          <div className="container pt-3 pb-2 px-6 mx-auto">
            <CourseContent/>
          </div>
        </section>
        {/* Fin Section Titre */}
        <section className="bg-white">
          <div className="container pb-2 px-6 mx-auto">
            <div className="text-center w-full md:w-1/4 mt-8 mx-auto">
              <Button/>
            </div>
          </div>
        </section>
      </>
    )
  }
}