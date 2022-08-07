const UserFavoriteColors = (props) => {
  console.log(props.animal);

  return (
    <ul>
      {props.animal.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};

export default UserFavoriteColors;
