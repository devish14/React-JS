import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parents constructor");
  }

  componentDidMount() {
    console.log("PARENTS COMPONENT DID MOUNT");
  }

  render() {
    console.log("Parents render");
    return (
      <div className="">
        <h1 className="text-xl text-fuchsia-900 font-extrabold ">This is the About component</h1>
        <User
          name={"I am Devi Shree"}
          description={"This web page was created by me"}
        />
        {/* <User
          name={"I am Krish"}
          description={"This web page was created by Krish"}
        />
          <User
          name={"I am Shah"}
          description={"This web page was created by Shah"}
        /> */}
      </div>
    );
  }
}

export default About;
