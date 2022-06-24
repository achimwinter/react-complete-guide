import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useState, useRef } from "react";
import { Form } from 'react-bootstrap';

const UserInput = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState({
        title: 'Invalid Input',
        message: ''
    });

    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    const addUserHandler = event => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName === '' || enteredName.trim().length  === 0 || enteredAge === '') {
           setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
           });
           toggleShow();
           return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0).'
            })
            toggleShow();
            return;
        }

        const user = {
            id: Math.random(),
            name: enteredName,
            age: enteredAge
        }

        props.onAddUser(user)
        nameInputRef = '';
        ageInputRef = '';
    }


    return (
        <>
        <Form className='mb-3' onSubmit={addUserHandler}>
            <Form.Label htmlFor='username'>Username
            <Form.Control type='text' name="name" ref={nameInputRef}/>
            </Form.Label>
            <Form.Label htmlFor='age'>Age
            <Form.Control type='number' name="age" ref={ageInputRef}/>
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