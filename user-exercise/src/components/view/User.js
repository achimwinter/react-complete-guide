const User = props => {
    return <div>
        <label>{props.data.name} ({props.data.age} years old)</label>
    </div>
}

export default User;