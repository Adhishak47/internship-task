
import Dashboard from './Dashoboard';

import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
       
       
        <Routes>
          <Route path='/dashboard' element={ <Dashboard/>}/>
        </Routes>
        
       

    </>
  )
}

export default App
