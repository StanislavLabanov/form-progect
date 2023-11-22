import { FormEvent, Dispatch, SetStateAction } from 'react';

export interface InputsIn {
   email: string,
   password: string
}

export interface InputsUp {
   name: string,
   nik: string,
   email: string,
   first_password: string,
   last_password: string
}

export interface ErrorType {
   flag: boolean,
   text: string
}

export interface SignInProps {
   onSubmit: (e: any, inputs: InputsIn) => void
   error: ErrorType
   setError: SetErrorType
}

export interface SignUpProps {
   onSubmit: (e: any, inputs: InputsUp) => void
   error: ErrorType
   setError: SetErrorType
}

export type SetErrorType = Dispatch<SetStateAction<ErrorType>>

export type evType = FormEvent<HTMLFormElement>