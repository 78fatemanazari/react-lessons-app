import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Forms = () => {
  const schema = yup.object().shape({
    name : yup.string().required("The name is required"),
    email : yup.string().email().required("The email is required"),
    age : yup.number().positive().required("Your age should be between 18-100").min(18).max(100),
    password: yup.string().required().min(4).max(15).matches(/[a-z]+/).matches(/\d+/),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required()
  })
  const {register, handleSubmit, formState:{errors}} = useForm({resolver : yupResolver(schema)});
  const onFormSubmit = (data) => {
    console.log("the form is submitted");
    console.log(data);
  }
    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>                               
                                            {/* for validation */}
        <input type='text' placeholder='name' {...register("name")} />
        {errors.name && (
          <p>{errors.name?.message}</p>
        )}
        <input type='email' placeholder='email' {...register("email")} />
        {errors.name && (
          <p>{errors.email?.message}</p>
        )}
        <input type='age' placeholder='age' {...register("age")} />
        {errors.name && (
          <p>{errors.age?.message}</p>
        )}
        <input type='password' placeholder='password' {...register("password")} />
        {errors.name && (
          <p>{errors.password?.message}</p>
        )}
        <input type='password' placeholder='confirm password' {...register("confirmPassword")} />
        {errors.name && (
          <p>{errors.confirmPassword?.message}</p>
        )}
        <input type='submit' />
      </form>
   );
}

export default Forms;