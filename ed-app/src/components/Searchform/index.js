import React from "react";
import "./style.css";

function Searchform(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="users">UserName:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="user"
          list="users"
          type="text"
          className="form-control"
          placeholder="Type the username again"
          id="employees"
        />
        <datalist id="users">
          {props.users.map((users) => (
            <option value={users} key={users} />
          ))}
       </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default Searchform;
