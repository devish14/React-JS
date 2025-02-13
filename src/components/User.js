import React from "react";

// When using Class component and need to use props we must call a constructor and pass the props with super and then access that using this keyword

//Here the props are being passed as an obj

class User extends React.Component {
  constructor(props) {
    super(props);

    // creating a multiple state variable in a class based component

    this.state = {
      userInfo: {
        login: "Dummmy",
        html_url: "Default value",
        avatar_url: "dummy_url",
      },
    };
    // console.log(props);
    console.log("Child constructor");
  }

  async componentDidMount() {
    const jsonData = await fetch("https://api.github.com/users/devish14");
    const json = await jsonData.json();

    // we updated the state variable with the latest data

    this.setState({
      userInfo: json,
    });
    console.log(json);
    console.log("CHILDS COMPONENT DID MOUNT");
  }

  componentDidUpdate(prevState, currentState) {
    // console.log(prevState); // this give the output   name={"I am Devi Shree"} description={"This web page was created by me"}
    // console.log(currentState) // this gives the values of userInfo
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("components will be unmounted");
  }
  render() {
    const { login, html_url, avatar_url } = this.state.userInfo; // destructring the props

    console.log("Child render");
    return (
      <div className="user-container">
        <h2>Welcome to Food Delivery</h2>
        <div className="user-text">
          <div>Name: {login}</div>
          <div>Location: {html_url}</div>
          <img
            src="https://avatars.githubusercontent.com/u/195868891?v=4"
            alt="Avatar image"
            className="img-align"
          ></img>

          {/* Here we use set state is used to update the state variable 
          count (value mentioned in set variable) : this.state.count +1 (what value needs to be updated here)*/}

          {/* <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Click Me
          </button>

          <li>CountStateValue: {count}</li> */}
        </div>
      </div>
    );
  }
}
export default User;
