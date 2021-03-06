import React from "react";
import "./style.css";

function Searchform(props) {
  return (
    <div>
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
            placeholder="Type the username here"
            id="employees"
          />
        </div>
      </form>
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
            <td>
              <img src={user.picture.medium}></img>
            </td>
            <td>
              {user.name.title + " " + user.name.first + " " + user.name.last}
            </td>
            <td>{user.email}</td>
            <td>{user.dob.age}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Searchform;
