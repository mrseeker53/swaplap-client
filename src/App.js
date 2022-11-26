import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import './App.css';

function App() {
  return (
    // Set max width
    <div className='max-w-[1280px] mx-auto'>
      {/* Declare Router Provider with router */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
