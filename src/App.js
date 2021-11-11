import { Container } from "./Theme/GlobalStyle";
import { ThemeProvider } from "./Components/Hooks/themeProvider";
import { GlobalStyle } from "./Theme/GlobalStyle";
import Calendar from "./Components/Calendar/Calendar";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";
import AppLayout from "./Components/AppLayout/AppLayout";

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <GlobalStyle />
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
