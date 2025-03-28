
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useMutation } from '@tanstack/react-query';
import { logout } from '../../services/authApi';
import { clearAuthHeader } from '../../lib/jwt';

export const Header = () => {
  
  const { isLoggedIn } = useAuthStore();

console.log(isLoggedIn)

  const {mutate} = useMutation({
  mutationFn: logout,
    onSuccess: async () => {
      useAuthStore.getState().logout();
      clearAuthHeader()
  }
})

  const onClickLogout = () => {
    mutate();
  };

  return (
    <div className='bg-white mb-8 border-b border-gray-300 py-3'>
      <Container maxWidth="lg">
        <Link to="/" className="flex justify-between items-center max-w-6xl mx-auto cursor-pointer">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" /> 
          <h1 className="text-2xl font-bold">My Blog</h1>
        </div>
          <div className='ml-3'>
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link to="/add-post">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </div>
            ) : (
              <div className='flex items-center gap-4'>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </div>
            )}
          </div>
        </Link>
      </Container>
    </div>
  );
};
