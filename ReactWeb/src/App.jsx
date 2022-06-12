import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import { Route, Routes,  } from 'react-router-dom';
import Footer from "./Footer";

const App = () => {

    return(
        <>
            <Navbar />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Redirect to='/' /> */}

            </Routes>
            <Footer />
            
        </>
    );
}

export default App;