import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
  const navigate = useNavigate();
  const { id, name, email, username } = user;

  return (
    <div onClick={() => navigate(`/user/${id}`)} className="cardWrapper">
      <h3>Name: {name}</h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;
