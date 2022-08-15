import { connect } from "react-redux";
import { changeOne } from "../redux/action";

const Two = (props) => {
  return (
    <>
      <h1>Two</h1>
      Change state of one:{" "}
      <input type="text" onChange={(e) => props.ef(e.target.value)}></input>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    ef: (value) => dispatch(changeOne(value)),
  };
};
export default connect(null, mapDispatchToProps)(Two);
