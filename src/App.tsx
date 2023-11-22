import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import { useState } from 'react';
import { InputsIn, InputsUp, evType } from './types/types';
import { passwordCheck } from './checks/password';

function App() {
  const [errorPasswordIn, setErrorPasswordIn] = useState({ flag: false, text: '' })
  const [errorPasswordUp, setErrorPasswordUp] = useState({ flag: false, text: '' })

  const onSubmitSingIn = (e: evType, inputs: InputsIn) => {
    e.preventDefault()
    passwordCheck(inputs.password, setErrorPasswordIn, undefined) &&
      alert(JSON.stringify({ email: inputs.email, password: inputs.password }))
  }

  const onSubmitSingUp = (e: evType, inputs: InputsUp) => {
    e.preventDefault()
    passwordCheck(inputs.first_password, setErrorPasswordUp, inputs.last_password) &&
      alert(JSON.stringify({ email: inputs.email, password: inputs.first_password, nik: inputs.nik, name: inputs.name }))
  }

  return (
    <div className='wrapper'>
      <Signin onSubmit={onSubmitSingIn} error={errorPasswordIn} setError={setErrorPasswordIn} />
      <Signup onSubmit={onSubmitSingUp} error={errorPasswordUp} setError={setErrorPasswordUp} />
    </div>
  )
}

export default App
