
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Course from './Component/Course/Course';
import CourseDetails from './Component/CourseDetails/CourseDetails';
import Courses from './Component/Courses/Courses';
import Faq from './Component/Faq/Faq';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Premium from './Component/Premium/Premium';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import Main from './Layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/Courses",
          element: <Courses></Courses>,
          children:[
            {
              path:"/Courses",
              loader: () => fetch('http://localhost:5000/course'),
              element: <Course></Course>
            },
            {
              path:"/Courses/:id",
              loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
              element: <CourseDetails></CourseDetails>
            },
          ]
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
        {
          path:"/Courses/:id/Premium",
          loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
          element: <PrivateRoute><Premium></Premium></PrivateRoute>
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
