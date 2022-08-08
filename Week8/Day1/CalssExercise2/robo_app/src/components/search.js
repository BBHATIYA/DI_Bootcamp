const Search = (props) => {
  console.log(props);
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={props.myHandeler}
      ></input>
      <button>Search</button>
    </div>
  );
};

export default Search;
