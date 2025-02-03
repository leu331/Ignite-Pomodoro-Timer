import { ThemeProvider } from 'styled-components';
import { darkTheme } from './Styles/Themes/darkTheme';
import { GlobalStyles } from './Styles/Global/global';
import { AppRoutes } from './Router'; // Aqui está a importação correta

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AppRoutes /> {/* Roteamento */}
    </ThemeProvider>
  );
}

export default App;
