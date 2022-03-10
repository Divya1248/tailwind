import React from 'react'
import Slider from './Components/Slider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Pages/Nav'
import Register from './Pages/Register'

const App = () => {
    return (
        <div> 
            <Nav />
            <Router>
                <Routes>
                    <Route path="" element={<Slider />} />
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Router>
            <Slider/>
        </div> 
    )
}

export default App

// Basics of tailwind
//  <div className='bg-blue-400 text-white font-bold p-3 m-2 rounded-lg'>
//  <div className='w-4/5 bg-gray-100 border-2 border-gray-100 m-auto my-2 shadow-md p-2'>
//             <h1>Root Component</h1>
//             <button className='bg-purple-500 text-white p-2 m-2 rounded-md w-20 hover:bg-purple-800'>Submit</button>
//         </div> 