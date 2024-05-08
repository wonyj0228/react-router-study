import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

// 컴포넌트가 아니라 router 정보만 export
// children으로 하위 페이지 관리가 용이하다.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Home />, errorElement: <ErrorComponent /> },
      { path: 'about', element: <About /> },
      //   /users 에는 보여줘야 할 페이지가 없음. 반드시 id와 함께 오기때문에 이것만 한것
      {
        path: '/users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
      // 만약 users에도 보여줄 페이지가 있으면 아래처럼
      //   {path: '/users', element : <User />, children : [{path:'userId', element:<User />}]}
    ],
    errorElement: <NotFound />,
  },
]);

// errorElement 관리가 가능함.
// 1. 컴포넌트 충돌로 발생한 에러
// 2. 없는 페이지를 요청했을 때 발생하는 에러

export default router;
