import { Outlet } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import { Container } from "@mui/material";
import { Header } from "./header";
import { Loader } from "./loader";
import { getUser } from "../../services/authApi";
import { useAuthStore } from "../../store/authStore";



const SharedLayout = () => {

 const { data: user, isLoading } = useQuery({ queryKey: ['user'], queryFn: getUser });
  if (user) {
    useAuthStore.getState().setLoggedIn();
    useAuthStore.getState().setUser(user);
  }

    return (       
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Container maxWidth="lg">
              <Suspense fallback={<Loader />}>
                <Outlet /> 
              </Suspense>
        <ToastContainer
         position="top-center"
         autoClose={2000}
                   /> 
            </Container>
          </main>
          {/* <Footer /> */}
        </>
      )}
    </div>)
};

export default SharedLayout;