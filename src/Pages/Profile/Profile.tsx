import { useAppSelector } from "../../Redux/hooks";

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  return <div>
    <h1>Profile</h1>
    <div>
        <h2>Name</h2>
        <p>{user?.email}</p>
    </div>
  </div>;
};

export default Profile;


