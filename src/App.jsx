import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from './Component/Home';
import Pricing from './Component/Pricing';
import Blog from './Component/Blog';
import Aboutus from './Component/Aboutus';

import Bridal from './Component1/Bridal';
import Skincare from './Component1/Skincare';
import Haircare from './Component1/Haircare';
import Bodycare from './Component1/Bodycare';
import Haircoloring from './Component1/Haircoloring';

import Facial from './Component1/Facial';
import Facial1 from './Component1/Facial1';
import Facial2 from './Component1/Facial2';


import Haircare1 from './Component2/Haircare1';
import Skincare1 from './Component2/Skincare1';
import Bodycare1 from './Component2/Bodycare1';

import Skincare2 from './Component3/Skincare2';
import Bodycare2 from './Component3/Bodycare2';
import Haircare2 from './Component3/Haircare2';

import Contactus from './Component/Contactus';
import Explore from './Component/Explore';
import Artist from './Component/Artist';

import FacialList from './Component5/FacialList';
import FacialList1 from './Component5/FacialList1';
import FacialList2 from './Component5/FacialList2';

import CartPage from './Component5/CartPage';
import { CartProvider } from './Component5/CartContext';


import Paymentsuces from './Component/Paymentsuces';
import Bank from './Component/Bank';
import Upi from './Component/Upi';
import Payment from './Component/Payment';
import Fourdigit from './Component/Fourdigit';
import Sucess from './Component/Sucess';
import Appointment from './Component/Appointment';

function App() {
  return (
    <>
     <CartProvider>
        <BrowserRouter>
           <Routes>

            {/* Component */}

                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/Pricing' element={<Pricing/>}></Route>
                    <Route path='/Blog' element={<Blog/>}></Route>
                    <Route path='/Aboutus' element={<Aboutus/>}></Route>

            {/* Component-1 */}

                    <Route path='/Bridal' element={<Bridal/>}></Route>
                    <Route path='/Skincare' element={<Skincare/>}></Route>
                    <Route path='/Haircare' element={<Haircare/>}></Route>
                    <Route path='/Bodycare' element={<Bodycare/>}></Route>  
                    <Route path='/Facial' element={<Facial/>}></Route>
                    <Route path='/Facial1' element={<Facial1/>}></Route>
                    <Route path='/Facial2' element={<Facial2/>}></Route>
                    <Route path='/Haircoloring' element={<Haircoloring/>}></Route>

            {/* Contact */}

                    <Route path='/Contactus' element={<Contactus/>}></Route>

            {/* Component-2 */}

                    <Route path='/Haircare1' element={<Haircare1/>}></Route>
                    <Route path='/Skincare1' element={<Skincare1/>}></Route>
                    <Route path='/Bodycare1' element={<Bodycare1/>}></Route>

            {/* Component-3 */}

                    <Route path='/Skincare2' element={<Skincare2/>}></Route>
                    <Route path='/Bodycare2' element={<Bodycare2/>}></Route>
                    <Route path='/Haircare2' element={<Haircare2/>}></Route>

             {/* Sub-con */}

                    <Route path='/Explore' element={<Explore/>}></Route>
                    <Route path='/Artist' element={<Artist/>}></Route> 

             {/* Product-page */}

                      <Route path="/" element={<FacialList />} />
                      <Route path="/" element={<FacialList1 />} />
                      <Route path="/" element={<FacialList2 />} />
                      <Route path="/cart" element={<CartPage/>} />

              {/* Payment-process */}


                      <Route path="/paymentsuces" element={<Paymentsuces/>}></Route>
                      <Route path='/Bank' element={<Bank/>}></Route>
                      <Route path='/Upi' element={<Upi/>}> </Route>
                      <Route path='/Payment' element={<Payment/>}></Route>
                      <Route path='/Fourdigit' element={<Fourdigit/>}></Route>
                      <Route path='/Sucess' element={<Sucess/>}></Route>
                      <Route path='/Appointment' element={<Appointment/>}></Route>
    
     
                   </Routes>
                </BrowserRouter>
             </CartProvider>
          </>
         )
    }

export default App;