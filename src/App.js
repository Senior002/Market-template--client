import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/allRoutes';
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;