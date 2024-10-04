import React from 'react'
import StepZilla from 'react-stepzilla'
import Form_Step1 from './Form_Step1'
import Form_Step2 from './Form_Step2'
import Form_Step3 from './Form_Step3'

const MultiStep_Package = () => {
      
  const steps = [
    {name:'info1',component:<Form_Step1/>},
    {name:'info2',component:<Form_Step2/>},
    {name:'info3',component:<Form_Step3/>}
  ]
  return (
    <div>
      <StepZilla steps={steps}/>
    </div>
  )
}

export default MultiStep_Package