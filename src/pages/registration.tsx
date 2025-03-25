import { FormProvider, useForm } from 'react-hook-form';
import Button from "@mui/material/Button";
import { FormInput } from "../components/shared/form-input";
import { Title } from '../components/shared/title';

import phoneImg from '../assets/phone-icon.png'



export const Registration = () => {

    
const form = useForm({
        mode: 'onChange',
    defaultValues: {
            FullName: '',
            email: '',
            password: ''    
        }
});
    
    const onSubmit = ()=> console.log(form.getValues())
    
    return (
      <FormProvider {...form}>
        <form className='flex flex-col gap-5 w-[500px] mx-auto my-[100px] border p-10 border-gray-400 rounded-lg' onSubmit={form.handleSubmit(onSubmit)} >
            <div className='flex justify-between items-center'>
                <Title text='Создание аккаунта' size='md' className='font-bold' />
            <img src={phoneImg} alt="phone-icon"width={60} height={60} />
            </div>
            <FormInput name='FullName' label='FullName' placeholder='FullName' type='text' required />
            <FormInput name='email' label='E-mail' placeholder='E-mail' required />
            <FormInput name='password' label='Password' placeholder='Password' type='password' required />
                <Button type='submit' size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
        </form>
  </FormProvider>
  );
};