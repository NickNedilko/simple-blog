
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {

  return (
       <>
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
