import "./App.css";
import Home from "./pages/Home";
import ThemeProvider from "./hooks/ThemeProvider.jsx";

function App() {
  return (
    <>
      <ThemeProvider />
      <Home />;
    </>
  );
}

export default App;
