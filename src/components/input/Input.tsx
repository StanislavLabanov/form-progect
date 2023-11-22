import { FC } from 'react';
import styles from './Input.module.scss'
import { ErrorType } from '../../types/types';

interface Props {
   placeholder: string
   label: string
   description: string
   error: ErrorType
   required: boolean
   radius: 'none' | 'small' | 'medium' | 'large'
   size: 'small' | 'medium' | 'large'
   type: string
   name: string
   value: string
}

const Input: FC<Props> = ({ placeholder, label, description, error, required, radius, size, type, name, value }) => {
   return (
      <label className={`${styles.label} ${styles[size]}`}>
         {label.length && <div className={styles.label_text}>{label}{required && <span> * </span>}</div>}
         {description.length && <div className={styles.description_text}>{description}</div>}
         <input name={name} value={value} className={styles[radius]} type={type} placeholder={placeholder} />
         {error.flag && <div className={styles.error_text}>{error.text}</div>}
      </label>
   )
}

export default Input