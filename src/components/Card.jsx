const Card = ({ user }) => {
  const { name, email, username } = user;
  return (
    <div className="cardWrapper">
      <h3>Name: {name}</h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;
