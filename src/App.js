
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Courses from './Component/Courses/Courses';
import Faq from './Component/Faq/Faq';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Main from './Layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/Home",
          element: <Home></Home>
        },
        {
          path:"/Courses",
          element: <Courses></Courses>
        },
        {
          path:"/FAQ",
          element: <Faq></Faq>
        },
        {
          path:"/Blog",
          element: <Blog></Blog>
        },
        {
          path:"/Login",
          element: <Login></Login>
        },
        {
          path:"/Register",
          element: <Register></Register>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
