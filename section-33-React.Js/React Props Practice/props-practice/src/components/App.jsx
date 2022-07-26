import React from "react";
import Card from "./Card";
import contacts from "../contact";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
        img="https://media-exp1.licdn.com/dms/image/C5603AQH6mMNN0x3AQg/profile-displayphoto-shrink_800_800/0/1645343257121?e=1664409600&v=beta&t=v_FtKxzx2-KIhvTSmGiir8jC522izqvr6nudMjEnZKU"
      />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
