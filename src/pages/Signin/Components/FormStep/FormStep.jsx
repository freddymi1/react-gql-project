import React, { useState } from 'react';

import Slide from 'react-reveal/Slide'

import StepOne from './Step/step1/step1';
import StepTwo from './Step/step2/step2';
import StepThree from './Step/step3/step3';
import StepFour from './Step/step4/step4';
import StepFive from './Step/step5/step5';
import StepSix from './Step/step6/step6';
import StepSept from './Step/step7/Step7';
import StepHuite from './Step/step8/Step8';
import StepNeuf from './Step/step9/step9';
import StepDix from './Step/step10/step10';
import FinalStep from './Step/FinalStep/FinalStep';

import './Style/index.css'
const step1 = () => {
  return <StepOne />
}
const step2 = () => {
  return <StepTwo />
}
const step3 = () => {
  return <StepThree />
}
const step4 = () => {
  return <StepFour />
}
const step5 = () => {
  return <StepFive />
}
const step6 = () => {
  return <StepSix />
}
const step7 = () => {
  return <StepSept />
}
const step8 =() => {
  return <StepHuite />
}
const step9 =() => {
  return <StepNeuf />
}
const step10 =() => {
  return <StepDix />
}
const finalStep = () => {
  return <FinalStep />
}

function App() {

  const [steps, setSteps] = useState([
    { key: 'step1', label: 'Profile', isDone: true, component: step1 },
    { key: 'step2', label: 'Naissance', isDone: false, component: step2 },
    { key: 'step3', label: 'Contact', isDone: false, component: step3 },
    { key: 'step4', label: 'Etudes', isDone: false, component: step4 },
    { key: 'step5', label: 'Ambition', isDone: false, component: step5 },
    { key: 'step6', label: 'Experience', isDone: false, component: step6 },
    { key: 'step7', label: 'CV et CIN', isDone: false, component: step7 },
    { key: 'step8', label: 'Portfolio', isDone: false, component: step8 },
    { key: 'step9', label: 'Humour', isDone: false, component: step9 },
    { key: 'step10', label: 'Competence', isDone: false, component: step10 },
    { key: 'finalStep', label: 'Felicitaion', isDone: false, component: finalStep },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
       return <h1>TEST</h1>;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);

    if (index === 0) {
      return;
    }

    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveStep(steps[index - 1]);
  }

  return (
    <div className="App">
      <div className="box">
        <div className="steps mx-0 w-full fixed sm:overflow-x-scroll md:overflow-hidden">
          <ul className="flex">
            {steps.map((step, i) => {
              return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                <div className="relative text-sm text-gray-500">Etape {i + 1}<br /><span>{step.label}</span></div>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className="box w-full mx-auto">
        
        <div className="w-full lg:w-1/2 mx-auto p-4 md:p-8">
            
            <div className="w-full pt-8">
              <Slide left>
                
                {activeStep.component()}
              </Slide>
            </div>
         
          <div className="py-16">
            <input type="button" id="btnPrev" className="text-lg bg-green-500 float-left cursor-pointer p-2 text-gray-50 font-normal float-right hover:shadow-lg hover:bg-green-600 outline-none focus:outline-none" value="Precedent" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
            <input type="button" className="text-lg bg-green-500 float-right cursor-pointer p-2 text-gray-50 font-normal float-right hover:shadow-lg hover:bg-green-600 outline-none focus:outline-none" value={steps[steps.length - 1].key !== activeStep.key ? 'Suivant' : 'Submit'} onClick={handleNext} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
