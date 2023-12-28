import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Icon, Image } from "semantic-ui-react";
import "./style.css"
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.dir(error));
  }, []);
  return (
    <div className="users-list">
      {users.map((user) => (
        <Card className="user" key={user.id}>
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/free-user-1648810-1401302.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{user.name}</Card.Header>
            <Card.Meta>
              <span className="date">
                {" "}
                <Icon name="mail" />
                {user.email}
              </span>
            </Card.Meta>
            <Card.Description>
              <ul>
                <span>Adress:</span>
                <li>City: {user.address.city}</li>
                <li>Street: {user.address.street}</li>
              </ul>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="phone" />
            {user.phone}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export default Users;
