
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/shared/header';
import { Home } from './pages/home';
import { Container } from '@mui/material';


function App() {

  return (
    <>
      <Header/>
      <Container maxWidth="lg">
          <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/posts/:id" element={<FullPost/>}/>
        <Route path="/add-post" element={<AddPost/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/> */}
      </Routes>
      </Container>
  
    </>
    
  )
}

export default App
