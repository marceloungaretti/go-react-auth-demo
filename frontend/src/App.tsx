import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

function App() {

  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8081/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        })

        const data = await response.json();
        setFirstName(data.first_name)
      })()
  })
  return (
    <Router>
      <Header firstName={firstName}/>
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen firstName={firstName}/>} />
            <Route path='/signup' element={<SignupScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
