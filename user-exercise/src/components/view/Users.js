import User from "./User";
import './Users.css'

const Users = props => {
    return (
        <ul className="users">
        {props.data.map(user => (
            <User 
            key={user.id}
            id={user.id}
            data={user}></User>
        ))}
        </ul>
    )
};

export default Users;