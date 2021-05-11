import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Searchform from "../components/Searchform";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    users: [],
    results: [],
    error: "",
  };
  componentDidMount() {
    API.getRandomUser()
      .then((res) => {
        this.setState({ users: res.data.results });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1
            className="text-center"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              fontSize: "40px",
            }}
          >
            Employee Directory
          </h1>
          <Searchform
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            users={this.state.users.filter((user)=>{
              if(this.state.search === ""){
                return true;
              }
              return user.name.first.includes(this.state.search);
            })}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
