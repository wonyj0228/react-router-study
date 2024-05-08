import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';

// 컴포넌트가 아니라 router 정보만 export
// children으로 하위 페이지 관리가 용이하다.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Home />, errorElement: <ErrorComponent /> },
      { path: 'about', element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

// errorElement 관리가 가능함.
// 1. 컴포넌트 충돌로 발생한 에러
// 2. 없는 페이지를 요청했을 때 발생하는 에러

export default router;
