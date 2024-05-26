
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AdminPanel from './components/AdminPanel'
import AdminPanelEmployee from './components/AdminPanelEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import AdminViewEmployee from './components/AdminViewEmployee'


function Home() {
  return (
    <>
      <h1>This is Home Component</h1>
    </>
  )
}



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/add-employee" element={<AdminPanelEmployee />} />
      <Route path="/update-employee" element={<UpdateEmployee />} />
      <Route path="/view-employee" element={<AdminViewEmployee />} />
    </Routes>
    </>
  )
}

export default App
