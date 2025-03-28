import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import { Container } from "@mui/material";
import { Header } from "./header";
import { Loader } from "./loader";



const SharedLayout = () => {
    return (       
    <div >
        <Header />
            <main>
            <Container maxWidth="lg">
                 <Suspense fallback={<Loader/>}> 
            <Outlet />
                    </Suspense> 
                    <ToastContainer/>
            </Container>   
        </main>
        {/* <Footer /> */}
    </div>
    );
};

export default SharedLayout;