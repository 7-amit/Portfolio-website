import React from 'react'
import {Routes, Route } from 'react-router-dom'
import {Introduction} from './Component/Introduction/Introduction'
import {About} from './Component/About/About'
import {Navbar} from './Component/Navbar/Navbar'
import {Contact} from './Component/Contact/Contact'
import {Skill} from './Component/Skill/Skill'
import {Reactjs} from './Component/Reactjs/Reactjs'
import {Javascript} from './Component/Javascript/Javascript'

const LazyAbout = React.lazy(() => import ('./Component/About/About'))

function App() {
  return (
    <>
       <Navbar/>
       <Routes>
          <Route  path= '/' element={<Introduction/>} />
          <Route path= 'About' element={<React.Suspense fallback ='Loading..' >
            <LazyAbout/>
            </React.Suspense>} />
          <Route path='Contact' element={<Contact/>} />
          <Route path= 'Skill' element={<Skill/>} >
            
          <Route path= 'Javascript' element={<Javascript/>} />
          <Route path= 'Reactjs' element={<Reactjs/>} />
          </Route>
          
          
        </Routes>
    </>
  ) 
} 

export default App;
 