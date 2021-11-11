import { Container } from "./Theme/GlobalStyle";
import { ThemeProvider } from "./Components/Hooks/themeProvider";
import Calendar from "./Components/Calendar/Calendar";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";
import AppLayout from "./Components/AppLayout/AppLayout";

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <Container>
          <Title />
          <Calendar />
          <Footer />
        </Container>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
