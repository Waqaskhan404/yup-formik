import { useFormik } from 'formik'
import React from 'react'
import {signUpSchema} from "../schema"

function Registration() {
  const initialValues={
    email:"",
    password:"",
    confirm_password:""
  }
  const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
      console.log(values)
      action.resetForm()
    }
  });
  console.log(errors);
  return (
    <div>
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name='email' 
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      />
            {errors.email && touched.email ? (<p className='text-red-600'>{errors.email}</p>) : null}
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="password" name="password"
       value={values.password}
       onChange={handleChange}
       onBlur={handleBlur}
      />
            {errors.password && touched.password ? (<p className='text-red-600'>{errors.password}</p>) : null}

    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Confirm Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input name="confirm_password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="password" 
       value={values.confirm_password}
       onChange={handleChange}
       onBlur={handleBlur}
      />
      {errors.confirm_password && touched.confirm_password ? (<p className='text-red-600'>{errors.confirm_password}</p>) : null}
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Sign Up
      </button>
    </div>
  </div>
</form>
    </div>
  )
}

export default Registration