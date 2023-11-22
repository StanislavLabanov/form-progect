import { FC, useState } from 'react';
import Input from '../input/Input';
import { SignInProps, evType } from '../../types/types';


const Signin: FC<SignInProps> = ({ onSubmit, error, setError }) => {
   const [inputs, setInputs] = useState({ email: '', password: '' })

   const changeHendler = (event: evType) => {
      setInputs(prev => ({
         ...prev,
         [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value
      }))
   }

   return (
      <form
         onBlur={() => setError({ flag: false, text: '' })}
         onSubmit={(e) => onSubmit(e, inputs)}
         onChange={changeHendler}
      >
         <Input
            placeholder={'Введите email'}
            label={'Email'}
            description={'input для ввода электронной почты'}
            error={{ flag: false, text: '' }}
            required={true}
            radius={'small'}
            size={'medium'}
            type={'email'}
            name={'email'}
            value={inputs.email}
         />
         <Input
            placeholder={'Введите пароль'}
            label={'Password'}
            description={'input для ввода пароля'}
            error={{ flag: error.flag, text: error.text }}
            required={true}
            radius={'small'}
            size={'medium'}
            type={'password'}
            name={'password'}
            value={inputs.password}
         />
         <button type='submit'>Submit</button>
      </form>
   )
}

export default Signin