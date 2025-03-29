import { FormProvider, useForm } from 'react-hook-form';
import Button from "@mui/material/Button";
import { FormInput } from "../components/shared/form-input";
import { Title } from '../components/shared/title';

import phoneImg from '../assets/phone-icon.png'
import { useMutation } from '@tanstack/react-query';
import { register } from '../services/authApi';
import { useAuthStore } from '../store/authStore';
import { setAuthHeader } from '../lib/jwt';
import { registerSchema } from '../validation';
import { zodResolver } from '@hookform/resolvers/zod';



export const Registration = () => {

  const {mutate} = useMutation({
    mutationFn: register,
      onSuccess: async (data) => {
  console.log(data)
      const { token, ...user } = data;
        useAuthStore.getState().setToken(token as string);
        useAuthStore.getState().setUser(user);
        useAuthStore.getState().login(token as string);
        setAuthHeader(token as string);
        
    }
  })
    
const form = useForm({
        mode: 'onChange',
        resolver: zodResolver(registerSchema),
        defaultValues: {
        fullName: '',
        email: '',
        password: ''    
        }
});
    
    const onSubmit = ()=> mutate(form.getValues())
    
    return (
      <FormProvider {...form}>
        <form className='flex flex-col gap-5 w-[500px] mx-auto my-[100px] border p-10 border-gray-400 rounded-lg' onSubmit={form.handleSubmit(onSubmit)} >
            <div className='flex justify-between items-center'>
                <Title text='Создание аккаунта' size='md' className='font-bold' />
            <img src={phoneImg} alt="phone-icon"width={60} height={60} />
            </div>
            <FormInput name='fullName' label='FullName' placeholder='FullName' type='text' required />
            <FormInput name='email' label='Email' placeholder='Email' required />
            <FormInput name='password' label='Password' placeholder='Password' type='password' required />
                <Button type='submit' size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
        </form>
  </FormProvider>
  );
};