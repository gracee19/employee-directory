import React from "react";
import "./style.css";

function Searchform(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="users">Please Type Username</label>
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
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
        <table id="users">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {props.users.map((user, index) => (
            <tr key={index}>
              {console.log(user)}
              <td>{props.users.map(user.picture.large)}</td>
              <td>{props.users.map(user.name)}</td>
              <td>{props.users.map(user.email)}</td>
              <td>{props.users.map(user.dob.age)}</td>
              <td>{props.users.map(user.gender)}</td>
            </tr>
          ))}
        </table>
      </div>
    </form>
  );
}

export default Searchform;
