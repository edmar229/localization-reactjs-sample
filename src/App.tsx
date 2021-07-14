import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Home/>
      </div>
    </LanguageProvider>
  );
}

export default App;
