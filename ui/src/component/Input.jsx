import {useFormContext} from "react-hook-form";
import {findInputError} from "../modules/utils";
import { Icon } from '@iconify/react';
import PropTypes from "prop-types";

export const Input = (
  {
    label,
    placeholder,
    name,
    validation,
    id,
    handleOnChange,
    classNames = '',
    isSearch = false,
    isFilter = false,
    isFocused  = false,
    type  = 'text',
    handleFilter = () => {}
  }) => {
  const {register, formState: { errors }} = useFormContext()

  const message = findInputError(errors, name)
  let baseClasses = 'focus:outline-0 focus:border-primary'
  let inputClass = `${baseClasses} ${classNames} border border-body p-2.5 rounded`

  if (message) {
    inputClass = `${baseClasses} ${classNames} border-error p-2.5 border-2 rounded outline-none`
  }

  if (isSearch) {
    inputClass = `${baseClasses} ${classNames} border border-body py-2.5 pl-12 rounded`
  }


  return (
    <div className="relative flex flex-col">
      <label htmlFor={id} className="text-body text-sm mb-2 p-0 leading-none "
      >{label}
      </label>
      <div className="relative w-full">
        {validation && <input
          id={id}
          type={type}
          className={inputClass}
          placeholder={placeholder}
          { ...register(name, validation)}
          autoFocus={isFocused}
        />}
        {!validation && <input
          id={id}
          type={type}
          className={inputClass}
          placeholder={placeholder}
          autoFocus={isFocused}
          onChange={(e) => handleOnChange(e.target.value)}
        />}

        {isSearch && <Icon icon="icon-park-outline:search" className="absolute top-3 left-3 w-6 h-6" />}
        {isFilter && <Icon onClick={handleFilter} icon="system-uicons:filtering" className="absolute top-3 right-3 w-6 h-6" />}
      </div>
      {
        message &&
        <div className="flex space-x-2 items-center mt-1">
          <Icon icon="mdi:error-outline" className="h-4 w-4 text-error" />
          <span className="text-xs text-error">{message}</span>
        </div>
      }
    </div>
  )
}

Input.propTypes = {
  validation: PropTypes.object,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  classNames: PropTypes.string,
  isSearch: PropTypes.bool,
  isFocused: PropTypes.bool,
  isFilter: PropTypes.bool,
  handleFilter: PropTypes.func,
  handleOnChange: PropTypes.func
}
