import {useFormContext} from "react-hook-form";
import {findInputError} from "../modules/utils"; 

export const Input = ({label, placeholder, name, validation, id}) => {
  const {register, formState: { errors }} = useFormContext()
  const message = findInputError(errors, name)
  return (
    <div className="relative flex flex-col">
    <label htmlFor={id} className="text-body text-sm mb-2 p-0 leading-none "
    >{label}
    </label>
    <input
      id={id}
      type="text"
      className={message ? 'border-error p-2.5 border-2 rounded outline-none' : 'border border-body p-2.5 rounded'}
      placeholder={placeholder}
      {...register(name, validation)}/>
    {message && <span className="text-xs mt-1 text-error">{message}</span>}
  </div>
  )
}
