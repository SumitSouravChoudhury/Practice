import { useState } from "react";

function TextUtils() {
  const [text, setText] = useState("");

  const handleInput = (event)=> {
    setText(event.target.value);
  }

  const handleUpCase = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoCase = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = ()=> {
    setText("");
  }

  const handleCopy = ()=> {
    var text = document.getElementById("floatingTextarea2");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return (
    <div className="d-flex flex-wrap flex-column justify-content-center align-items-center my-5">
      <h3 className="my-3">Write your text below</h3>
      <div className="form-floating">
        <textarea
          className="form-control border border-2 border-dark rounded-1"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "200px", width: "600px" }}
          value={text}
          onChange={handleInput}
        >
          {text}
        </textarea>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center my-3">
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpCase}>
          Uppercase
        </button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLoCase}>
          Lowercase
        </button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <h5>Number of words: <span>{text.split(" ").length}</span></h5>
      <h5>Number of characters: <span>{text.length}</span></h5>
    </div>
  );
}

export default TextUtils;
