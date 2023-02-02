
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/header'
import HomepageTwo from './pages/HomepageTwo'
import Login from './pages/Login'
const App = () => {

  return (
    <BrowserRouter>

      <Header />
      <div className="container">


        <Routes>

          <Route path="/home" element={<HomepageTwo />} />
          <Route path="/" element={<Login />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
