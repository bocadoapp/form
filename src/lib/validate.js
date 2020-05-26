import { object, string, ref } from 'yup'

const mail = string().required().email()
const password = string().required().min(3)

export const loginSchema = object().shape({
  mail,
  password
})

export const registerSchema = object().shape({
  name: string().required().min(3),
  mail,
  password,
  passwordRepeat: password.oneOf([ref('password')])
})

export const refsValuesToObject = refs =>
  Object.keys(refs).reduce(
    (acc, curr) => {
      acc[curr] = refs[curr].current.value
      return acc
    }, {}
  )

export const parseYupErrors = errs =>
  errs.inner.reduce((acc, curr) => {
    acc[0].push(`error.${curr.path}.${curr.type}`)
    acc[1][curr.path] = curr.message
    return acc
  }, [[], {}])
