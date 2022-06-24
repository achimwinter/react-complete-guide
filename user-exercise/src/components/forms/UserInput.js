import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useState } from "react";
import { Form } from 'react-bootstrap';

const UserInput = props => {
    const [error, setError] = useState({
        title: 'Invalid Input',
        message: ''
    });

    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }


    const addUserHandler = event => {
        event.preventDefault();

        if (username === '' || username.trim().length  === 0 || age === '') {
           setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
           });
           toggleShow();
           return;
        }

        if (+age < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0).'
            })
            toggleShow();
            return;
        }

        const user = {
            id: Math.random(),
            name: username,
            age: age
        }

        props.onAddUser(user)
        setUsername('');
        setAge('');
    }


    return (
        <>
        <Form className='mb-3' onSubmit={addUserHandler}>
            <Form.Label htmlFor='username'>Username
            <Form.Control value={username} type='text' name="name" onChange={usernameChangeHandler}/>
            </Form.Label>
            <Form.Label htmlFor='age'>Age
            <Form.Control value={age} type='number' name="age" onChange={ageChangeHandler}/>
            </Form.Label>
            <Form.Control type='submit' value='Add User' />
        </Form>


        <Modal show={show} onHide={toggleShow}>
            <Modal.Header closeButton>
                <Modal.Title>{error.header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{error.message}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={toggleShow}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
};

export default UserInput;