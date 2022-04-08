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
import Theme from '../pages/Theme'

const RequireAuth = ({ children }) => {
  const token = sessionStorage.getItem('token')
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
        element: <Home />,
        title: 'home',
        icon: 'PieChartOutlined',
      },
      {
        path: 'about',
        element: <About />,
        title: 'about',
        icon: 'DesktopOutlined'
      },
      {
        path: 'multi',
        element: <Multi />,
        title: 'nested',
        icon: 'ApartmentOutlined',
        children: [
          {
            path: 'page1',
            element: <Page1 />,
            title: 'nested1',
            icon: 'MenuOutlined',
            children: [
              {
                path: 'one',
                element: <Page11 />,
                title: 'nested11',
                icon: 'MenuOutlined'
              },
              {
                path: 'two',
                element: <Page12 />,
                title: 'nested12',
                icon: 'MenuOutlined'
              }
            ]
          },
          {
            path: 'page2',
            element: <Page2 />,
            title: 'nested2',
            icon: 'MenuOutlined'
          }
        ]
      },
      {
        path: 'international',
        element: <International />,
        title: 'i18n',
        icon: 'GlobalOutlined'
      },
      {
        path: 'authorization',
        element: <Authorization />,
        title: 'auth',
        icon: 'SafetyOutlined'
      },
      {
        path: 'theme',
        element: <Theme />,
        title: 'theme',
        icon: 'BgColorsOutlined'
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
