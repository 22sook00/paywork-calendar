import Calendar from './Components/Calendar/Calendar'
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'
import {GlobalStyle} from './GlobalStyle'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Title />
        <Calendar />
        <Footer />
    </div>
  );
}

export default App;
