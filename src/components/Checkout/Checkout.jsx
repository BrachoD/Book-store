import React, { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../main'

const Checkout = () => {
    const [user, setUser] = useState({
        name: null,
        lastName: '',
        phone: '',
        email: '',
        repeatEmail: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',

    })
    const [emailMatch, setEmailMatch] = useState(true)
    const [formErrors, setFormErrors] = useState({})
    const { cart, getTotal, clearcart } = useContext(CartContext)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateEmail = () => {

        if (user.email === user.repeatEmail) {
            setEmailMatch(true)
        } else {
            setEmailMatch(false)
        }
    }

    console.log(user)

    const validateForm = () => {
        const errors = {}

        if (!user.name) {
            errors.name = 'Please enter a name.'
        }
        if (!user.lastName) {
            errors.lastName = 'Please enter a last name.'
        }
        if (!user.phone) {
            errors.phone = 'Please enter a valid phone number.'
        }
        if (!user.email) {
            errors.email = 'Please enter a valid email address.'
        }
        if (!user.repeatEmail) {
            errors.repeatEmail = 'Please repeat your email address.'
        }
        if (!user.address) {
            errors.address = 'Please enter an address.'
        }
        if (!user.city) {
            errors.city = 'Please enter a city.'
        }
        if (!user.state) {
            errors.state = 'Please enter a state.'
        }
        if (!user.zipCode) {
            errors.zipCode = 'Please enter a zip code.'
        }
        console.log(errors)
        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = () => {
        const isFormValid = validateForm()
        validateEmail()
        if (isFormValid && emailMatch) {

            const order = {
                buyer: user,
                items: cart,
                total: getTotal()
            }
            const ordersCollection = collection(db, 'orders')

            addDoc(ordersCollection, order)

                .then(({ id }) => {
                    console.log(`orden de compra generada con el Nro. ${id}`)
                })
        }
    }

    const [validated, setValidated] = useState(false);
    console.log(validated)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form)
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {

            console.log('checkValidity es false')
            
        }else{
            getOrder()
        }

        setValidated(true)
    }

    return (
        <div>
            <h1>Purchase Summary</h1>
            <h3>{getTotal()}</h3>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            name='name'
                            type="text"
                            placeholder="John"
                            onChange={updateUser}

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            name='lastName'
                            type="text"
                            placeholder="Doe"
                            onChange={updateUser}

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            name='phone'
                            type="text"
                            placeholder="(999) 999 9999"
                            onChange={updateUser}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" required name='email' onChange={updateUser} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Repeat Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" required name='repeatEmail' onChange={updateUser} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required name='address' onChange={updateUser} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required name='city' onChange={updateUser} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" required name='state' onChange={updateUser} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip code</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required name='zipCode' onChange={updateUser} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                {/* <Button onClick={getOrder}>Submit form</Button> */}
                <Button type='submit'>Submit form</Button>


            </Form>
            {formErrors.repeatEmail && (
                <h1>{formErrors.repeatEmail}</h1>
            )}
            {!emailMatch && (
                <h1>Email addresses do not match!</h1>
            )}
        </div>
    )
}

export default Checkout