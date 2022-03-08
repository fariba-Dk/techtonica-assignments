import { useState } from "react";

const Form = (props) => {
  const [values, setValues] = useState({
    text:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values) return;
    props.addItem(values);
    console.log(values);
    setValues("");
  };

  return (
    <div className="ListMain">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter an item"
            className="input"
            values={values}
            onChange={(e) => setValues(e.target.value)}
          />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
