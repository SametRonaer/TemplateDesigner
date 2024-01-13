import { RouterProvider } from 'react-router-dom';
import './App.css';
import FabricDemo from './FabricDemo';
import DesignPage from './Pages/DesignPage/DesignPage';
import { sendJsonTemplate } from './Services/apiService';
import router from './Services/routerService';

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
