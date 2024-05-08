import { Outlet } from 'react-router-dom';
import Header from './components/Header';

// Outlet : 중첩경로에서 중첩된 라우트를 렌더링하기 위해 사용
// 하위라우팅을 가능하게 한다.
function Root() {
  return (
    <div className="Root">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
