import "./Hello.css";
import Card from "react-bootstrap/Card";

const Hello = (props) => {
  console.log(props.user);
  //   const { user } = props;
  const { email, username } = props.user;

  return (
    <Card className="grow colorYellow">
      <Card.Body>
        Hello {email} {username}
      </Card.Body>
    </Card>
  );
};

export default Hello;
