const Rest = (props) => {
  return (
    <div className="container">
      <div
        className="reset"
        onClick={() => {
          props.setCounter(0);
        }}
      >
        <span>Reset</span>
      </div>
    </div>
  );
};

export default Rest;
