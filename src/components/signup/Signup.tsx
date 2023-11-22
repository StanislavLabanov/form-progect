import { FC, useState } from 'react';
import Input from '../input/Input';
import { SignUpProps, evType } from '../../types/types';

const Signup: FC<SignUpProps> = ({ onSubmit, error, setError }) => {
   const [inputs, setInputs] = useState({
      name: '',
      nik: '',
      email: '',
      first_password: '',
      last_password: ''
   })

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
            placeholder={'Введите имя'}
            label={'Имя'}
            description={'input для ввода имени'}
            error={{ flag: false, text: '' }}
            required={true}
            radius={'small'}
            size={'medium'}
            type={'text'}
            name={'name'}
            value={inputs.name}
         />
         <Input
            placeholder={'Введите ник'}
            label={'Ник'}
            description={'input для ввода ника'}
            error={{ flag: false, text: '' }}
            required={true}
            radius={'small'}
            size={'medium'}
            type={'text'}
            name={'nik'}
            value={inputs.nik}
         />
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
            label={'Пароль'}
            description={'input для ввода пароля'}
            error={{ flag: error.flag, text: error.text }}
            required={true}
            radius={'small'}
            size={'medium'}
            type={'password'}
            name={'first_password'}
            value={inputs.first_password}
         />
         <Input
            placeholder={'Повторите пароль'}
            label={'Повторите пароль'}
            description={'input для ввода пароля'}
            error={{ flag: false, text: '' }}
            required={true}
            radius={'small'}
            size={'medium'}
            type={'password'}
            name={'last_password'}
            value={inputs.last_password}
         />
         <button type='submit'>Submit</button>
      </form>
   )
}

export default Signup