import { useLoaderData } from "react-router-dom";
// import { getAllUser } from "../services/apiUsers";
import Card from "../components/Card";

const User = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="usersWrapper">
      {users?.map((user, index) => (
        <Card user={user} key={index} />
      ))}
    </div>
  );
};
// export const loader = async () => {
//   const users = await getAllUser();
//   return users;
// };

export default User;
