"use client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Sibling from './Components/Sibling';
import Fapp from './Family-Module/Fapp';


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/sibling" element={<Sibling />} />
        <Route path="/fapp" element={<Fapp />} />
      </Routes>
    </BrowserRouter>
    
    
    </>
    // <>
    //   <Header />
     
    //   {/* <Sibling/>
    //   <Fapp/> */}

        
       
    // </>
  );
}
