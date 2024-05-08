import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  // ?fav=yes&geo=123&something=true
  // searchparams : url의 쿼리 문자열을 읽고 입력된 정보로 페이징이나, 검색 등을 수행하기 위해 사용됨
  // useState 훅과 마찬가지로 set을 사용하면 navigate와 비슷한 역할을 함
  // 탐색과 같이 작동하지만 url의 검색부분에 대해서만 작동함
  console.log(readSearchParams.has('geo'));
  console.log(readSearchParams.get('geo'));

  // set을 사용해서 url에 검색을 실행시킬 수도 있다.
  setTimeout(() => {
    setSearchParams({
      day: 'today',
      tomorrow: '123',
    });
  }, 3000);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
