import { ListGroup } from "react-bootstrap";
import User from "./User";
import './Users.css'

const Users = props => {
    return (
        <ListGroup className="users">
        {props.data.map(user => (
            <User 
            key={user.id}
            id={user.id}
            data={user}></User>
        ))}
        </ListGroup>
    )
};

export default Users;