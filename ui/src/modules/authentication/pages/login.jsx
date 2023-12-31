import {Input} from "../../../component";
import {emailValidation, passwordValidation} from "../../utils/inputValidation.js";
import {FormProvider, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {UserLogin} from "../services.js";
import { Icon } from '@iconify/react';
import {Navigate, Link} from "react-router-dom";

const Login = () => {
  const methods = useForm()
  const dispatch = useDispatch()
  const onSubmit = methods.handleSubmit(data => {
    dispatch(UserLogin(data))
  })

  const {loading, isError, isLoginSuccess} = useSelector(state => state.auth)
  const {user} = useSelector(state => state.auth)
  return (
    <>
      {
        isLoginSuccess
          ? user && user.preferences ? <Navigate to="/"/> : <Navigate to="/set-preferences" />
          : <div className="h-screen w-full p-6 flex flex-col max-w-[1240px] mx-auto">
            <div className="mb-10">
              <p className="font-bold text-3xl">Hello</p>
              <p className="font-bold text-3xl text-primary">Again!</p>
              <p className="text-lg font-light">Welcome back you have <br/> been missed</p>
            </div>
            <div className="space-y-4">
              {isError && <div className="rounded p-4 bg-error text-white font-semibold">Login Failed, please try again</div>}
              <FormProvider {...methods} >
                <form
                  className="space-y-10"
                  onSubmit={e => e.preventDefault()}
                  noValidate
                  autoComplete="off">
                  <div className="space-y-6">
                    <Input id="email" label="Email" placeholder="" name="email" classNames="w-full" validation={emailValidation.validation} isFocused={true} />
                    <Input id="password" label="Password" placeholder="" name="password" classNames="w-full" validation={passwordValidation.validation} type="password" />
                  </div>
                  <button onClick={onSubmit} className="bg-primary px-6 py-3.5 text-white rounded w-full font-bold flex items-center justify-center">
                    {loading ? <Icon icon="gg:spinner" className="animate-spin h-6 w-6"/> : 'Login'}
                  </button>
                </form>
              </FormProvider>
            </div>
            <div className="w-full flex justify-center">
              <p className="mt-6 text-cnter">Dont havd an account <Link to="/register" className="text-primary font-bold">Register</Link> </p>
            </div>
          </div>
      }
    </>
  )
}

export default Login
