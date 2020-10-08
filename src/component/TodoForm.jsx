import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setImput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChanche = (e) => {
    setImput(e.target.value);
  };

  const handleKeyPress = (e) => {
    var key = e.keyCode || e.which;

    if (key === 13) {
      e.preventDefault();
      // console.log(e.target.value);
      props.onKeyPress({
        id: Math.floor(Math.random() * 1000000),
        text: input,
      });
      setImput("");
    }
  };

  return (
    <form className="todo-input">
      <input
        type="text"
        name="enterType"
        className="enterType"
        placeholder="Add a todo"
        value={input}
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={handleChanche}
        ref={inputRef}
      />
    </form>
  );
};

export default TodoForm;
