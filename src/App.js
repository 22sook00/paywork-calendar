import React from 'react'
import Title from './components/Title/Title'
import CalendarContainer from './components/Calendar/CalendarContainer';
import Footer from './components/Footer/Footer';
import { Container } from './GlobalStyle';

function App() {
  return (
    <Container>
      <Title/>
      <CalendarContainer/>
      <Footer/>
    </Container>
  )
}

export default App
