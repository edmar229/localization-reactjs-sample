import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <div className="App">
          <Home/>
        </div>
      </LanguageProvider>
    </ThemeContextProvider>
  );
}

export default App;
