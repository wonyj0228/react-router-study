import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const ctx = useOutletContext<IFollowersContext>();

  return (
    <>
      <h1>Here are {ctx.nameOfMyUser}의 followers</h1>
    </>
  );
}
export default Followers;
