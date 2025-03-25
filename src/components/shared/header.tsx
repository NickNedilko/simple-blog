
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className='bg-white mb-8 border-b border-gray-300 py-3'>
      <Container maxWidth="lg">
        <Link to="/" className="flex justify-between items-center max-w-6xl mx-auto cursor-pointer">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" /> 
          <h1 className="text-2xl font-bold">My Blog</h1>
        </div>
          <div className='ml-3'>
            {isAuth ? (
              <div className="flex items-center gap-4">
                <a href="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </a>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </div>
            ) : (
              <div className='flex items-center gap-4'>
                <a href="/login">
                  <Button variant="outlined">Войти</Button>
                </a>
                <a href="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </a>
              </div>
            )}
          </div>
        </Link>
      </Container>
    </div>
  );
};
