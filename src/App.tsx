
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/shared/header';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<div>Test</div>} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<FullPost/>}/>
        <Route path="/add-post" element={<AddPost/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/> */}
      </Routes>
  
    </>
    
  )
}

export default App
