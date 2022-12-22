import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import theme  from './Theme.style'
import  'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
  );
}

export default App;