import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { IconType } from 'react-icons'

export interface IFieldProps {
    error?: FieldError | undefined
    Icon?: IconType
}

type TypeInputFieldProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputFieldProps {}