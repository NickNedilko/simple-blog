
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/shared/header';
import { Home } from './pages/home';
import { Container } from '@mui/material';
import { Login } from './pages/login';
import { Registration } from './pages/registration';


function App() {

  return (
    <>
      <Header/>
      <Container maxWidth="lg">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        {/* <Route path="/posts/:id" element={<FullPost/>}/>
        <Route path="/add-post" element={<AddPost/>}/> */}
      </Routes>
      </Container>
  
    </>
    
  )
}

export default App
