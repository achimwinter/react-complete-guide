import Card from "./Card";
import User from "./User";

const Users = (props) => {
  return (
    <Card>
      <ul>
        {props.data.map(user => (
          <User key={user.id} id={user.id} >
            {user.name} ({user.age} years old)
          </User>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
