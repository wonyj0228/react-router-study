import { useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  const { userId } = useParams();

  return (
    <>
      <h1>User</h1>
      <h4>
        User with it {userId} is name : {users[Number(userId) - 1].name}
      </h4>
    </>
  );
}

export default User;
