import { Outlet } from 'react-router-dom';
import Header from './components/Header';

// Outlet : 중첩경로에서 중첩된 라우트를 렌더링하기 위해 사용
// 하위라우팅을 가능하게 한다.
// 이 컴포넌트 경로의 하위 경로가 outlet을 통해 렌더링됨

// root의 outlet context에 mode에 관해서 쓰게된다면 매우 유용할 것
//  header 에 state를 바꿀 수 있는 버튼이 있으면 좋을 듯
function Root() {
  return (
    <div className="Root">
      <Header />
      <Outlet />
      {/* <Outlet context={{ darkMode: true }} /> */}
    </div>
  );
}

export default Root;
