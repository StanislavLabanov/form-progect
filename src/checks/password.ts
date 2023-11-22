import { SetErrorType } from '../types/types';

export const passwordCheck = (password: string, setError: SetErrorType, passwordTwo: string | undefined) => {
   if (!password.length) {
      setError({ flag: true, text: 'поле обязательно к заполнению' })
      return false
   } else if (!password.match(/[A-Z]/)?.length) {
      setError({ flag: true, text: 'должна быть хотя бы одна заглавная буква' })
      return false
   } else if (!password.match(/^[a-zA-Z1-9]+$/)?.length) {
      setError({ flag: true, text: 'разрешены только английские буквы' })
      return false
   } else return passwordTwo === undefined ? true : equalsPasswords(setError, password, passwordTwo)
}

const equalsPasswords = (setError: SetErrorType, password1: string, password2: string) => {
   if (password1 !== password2) {
      setError({ flag: true, text: 'пароли не совпадают' })
      return false
   } else return true
}