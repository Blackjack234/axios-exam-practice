import React from 'react'
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import Read from '../component/Read/Read'
import Create from '../component/Create/Create'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import Details from '../component/details/Details'
import Edit from '../component/Edit/Edit'
const RootRoute = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='' element={<Read/>}/>
            <Route path='create' element={<Create/>}/>
            <Route path='details/:pid' element={<Details/>}/>
            <Route path='edit/:pid' element={<Edit/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default RootRoute
