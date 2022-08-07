import "./Exercise4.css";

const Exercise4 = () => {
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <div>
      <h1 style={style_header}>This is Header</h1>
      <p className="para">This is a paragraph</p>
      <a href="https://www.google.com/"></a>
      <form>
        <lable>This is a form</lable>
        <input type="text"></input>
      </form>
      <img src="https://www.w3schools.com/html/img_girl.jpg"></img>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
        <li>Cola</li>
      </ul>
    </div>
  );
};

export default Exercise4;
