import Card from "./Card";

const User = props => {
    return (
        <Card>
            {props.children}
        </Card>
    )
};

export default User;
