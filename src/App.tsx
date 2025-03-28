
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Registration } from './pages/registration';
import { FullPost } from './pages/full-post';
import { RestrictedRoute } from './lib/redirect-routes';
import SharedLayout from './components/shared/shared-layout';



function App() {
      
  return (
        <Routes>
        <Route path='/' element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RestrictedRoute component={<Login />} redirectTo='/'/>}/>
        <Route path="/register" element={<RestrictedRoute component={<Registration />} redirectTo='/'/>}/>
        <Route path="/posts/:id" element={<FullPost/>}/>
          {/* <Route path="/add-post" element={<AddPost/>}/> */}
        </Route>
      </Routes>

    
  )
}

export default App
