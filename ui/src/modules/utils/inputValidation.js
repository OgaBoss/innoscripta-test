export const emailValidation = {
  name: 'email',
  label: 'Email',
  id: 'email',
  validation: {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email is not valid',
    },
  },
}

export const nameValidation = {
  validation: {
    required: {
      value: true,
      message: 'Name is required',
    },
  },
}

export const passwordValidation = {
  name: 'password',
  label: 'Password',
  id: 'password',
  validation: {
    required: {
      value: true,
      message: 'Password is required',
    },
    minLength: {
      value: 6,
      message: 'Provide min of 6 characters',
    },
  },
}
