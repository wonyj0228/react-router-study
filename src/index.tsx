import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// app을 렌더링하지 않고, router 정보를 담은 Router Provider를 렌더링
root.render(<RouterProvider router={router} />);
