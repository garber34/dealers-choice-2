import React from "react";

const Form = ({submit, change, title, year, minPlayer,maxPlayer,tags,cancel}) => {
  console.log("Form title:", title)
  return (
    <div id='formContainer'>
    <form onSubmit={submit}>
      <input name="title" placeholder="Game Title" value={title} onChange={change}></input>
      <input name="year" placeholder="Year published" value={year} onChange={change}></input>
      <input
        name="minPlayer"
        placeholder="Minimum Players"
        value={minPlayer}
        onChange={change}
      ></input>
      <input
        name="maxPlayer"
        placeholder="Max Players"
        value={maxPlayer}
        onChange={change}
      ></input>
      <textarea
        name="tags"
        placeholder="Tags, separated by semicolon"
        value={tags}
        onChange={change}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
    <button onClick={cancel}>Cancel</button>
    </div>
  );
};

export default Form;
