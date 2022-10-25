
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Courses from './Component/Courses/Courses';
import Faq from './Component/Faq/Faq';
import Main from './Layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
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
