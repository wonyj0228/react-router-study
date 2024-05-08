import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  const { userId } = useParams();
  const nameOfMyUser = users[Number(userId) - 1].name;
  //   link to 쓸 때, 절대경로 & 상대경로 확실히 하기
  // 절대경로 : /followers -> localhost:3000/followers
  // 상대경로 : followers -> localhost:3000/users/2/followers
  return (
    <>
      <h1>User</h1>
      <h4>
        User with it {userId} is name : {nameOfMyUser}
      </h4>
      <hr />

      <Link to={'followers'}>See followers</Link>
      <Outlet context={{ nameOfMyUser }} />
    </>
  );
}

export default User;
