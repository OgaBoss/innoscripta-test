export function findInputError(errors, name) {
  const value = Object.keys(errors)
    .filter(key => key.includes(name))

  if (value.length > 0) {
    return errors[value[0]]?.message
  }

  return null
}
