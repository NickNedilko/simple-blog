import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "@mui/material/Button";
import { FormInput } from "../components/shared/form-input";
import { Title } from '../components/shared/title';
import phoneImg from '../assets/phone-icon.png'
import { useMutation } from '@tanstack/react-query';
import { login } from '../services/authApi';
import { useAuthStore } from '../store/authStore';
import { setAuthHeader } from '../lib/jwt';
import { loginSchema } from '../validation';
import { toast } from 'react-toastify';


export const Login = () => {

  const {mutate} = useMutation({
  mutationFn: login,
    onSuccess: async (data) => {
      if (data) {
     toast.success("Вы успешно вошли в аккаунт");
}
    const { token, ...user } = data;
      useAuthStore.getState().setToken(token as string);
      useAuthStore.getState().setUser(user);
      useAuthStore.getState().login(token as string);
      setAuthHeader(token as string);
      
  }
})

const form = useForm({
  mode: 'onChange',
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''    
        }
});
    

 const onSubmit = ()=> mutate(form.getValues())
   
    return (
      <FormProvider {...form}>
        <form className='flex flex-col gap-5 w-[500px] mx-auto my-[100px] border p-10 border-gray-400 rounded-lg' onSubmit={form.handleSubmit(onSubmit)} >
            <div className='flex justify-between items-center'>
                <Title text='Вход в аккаунт' size='md' className='font-bold' />
            <img src={phoneImg} alt="phone-icon"width={60} height={60} />
            </div>
        
            <FormInput name='email' label='E-mail' placeholder='E-mail' required />
            <FormInput name='password' label='Password' placeholder='Password' type='password' required />
        
        <Button type='submit'  size="large" variant="contained" fullWidth  >
      Войти
      </Button >
        </form>
  </FormProvider>
  );
};


         
{/* <Button
          size="small"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </Button> */}