import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes';

function App() {
  return (
    <div className='mt-6 mx-10'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
