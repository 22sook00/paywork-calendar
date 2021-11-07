import { Container } from "./GlobalStyle";
import Calendar from "./Components/Calendar/Calendar";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Container>
      <Title />
      <Calendar />
      <Footer />
    </Container>
  );
}

export default App;
