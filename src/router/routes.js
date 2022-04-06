import { Navigate } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Layout from '../pages/Layout/Index'
import Home from '../pages/Home'
import About from '../pages/About'
import Multi from '../pages/Multi'
import Page1 from '../pages/MultiPage/Page1'
import Page2 from '../pages/MultiPage/Page2'
import Page11 from '../pages/MultiPage/Page11'
import Page12 from '../pages/MultiPage/Page12'
import International from '../pages/International'
import Authorization from '../pages/Authorization'

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token')
  if (token) {
    return children
  } else {
    return <Navigate to='/login' replace />
  }
}

const routes = [
  {
    path: '/',
    element: <RequireAuth><Layout /></RequireAuth>,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'multi',
        element: <Multi />,
        children: [
          {
            path: 'page1',
            element: <Page1 />,
            children: [
              {
                path: 'one',
                element: <Page11 />
              },
              {
                path: 'two',
                element: <Page12 />
              }
            ]
          },
          {
            path: 'page2',
            element: <Page2 />
          }
        ]
      },
      {
        path: 'international',
        element: <International />,
      },
      {
        path: 'authorization',
        element: <Authorization />,
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
