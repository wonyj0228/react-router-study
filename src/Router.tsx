import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';

// 컴포넌트가 아니라 router 정보만 export
// children으로 하위 페이지 관리가 용이하다.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

export default router;
