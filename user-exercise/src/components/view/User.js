import { ListGroup } from "react-bootstrap";

const User = props => {
    return <ListGroup.Item>
        {props.data.name} ({props.data.age} years old)
    </ListGroup.Item>
}

export default User;