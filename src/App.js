import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import './App.css';

function App() {
  return (
    <div>
      {/* Declare Router Provider with router */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
