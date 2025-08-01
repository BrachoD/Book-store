import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../main'
import './Checkout.css'
import Swal from 'sweetalert2';

const Checkout = () => {
    const [user, setUser] = useState({
        name: null,
        lastName: '',
        phone: '',
        email: '',
        repeatEmail: '',
        address: '',
        adrress2: '',
        city: '',
        state: '',
        zipCode: '',

    })

    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [validated, setValidated] = useState(false);

    const updateUser = (event) => {

        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))

    }

    const getOrder = () => {

        const order = {
            buyer: user,
            items: cart,
            total: Number((getTotal() * 1.07).toFixed(2)),
            timestamp: serverTimestamp()
        }
        const ordersCollection = collection(db, 'orders')
        console.log(typeof (order.total))
        console.log(typeof (order.timestamp))


        addDoc(ordersCollection, order)

            .then(({ id }) => {
                Swal.fire({
                    icon: "success",
                    title: "Your order was placed",
                    text: `Your order with id: ${id} is being processed.`,
                    footer: `Order total: $${order.total}`
                });
                clearCart()
            })
    }



    const handleSubmit = (event) => {

        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                html: "Something went wrong! Please check the fields in red.",
            });
        } else {
            Swal.fire({
                title: "Are you sure?",
                html:
                    `<h4>Order details</h4>
                <h6>Name: ${user.name} ${user.lastName}</h6>
                <h6>Email: ${user.email}</h6>
                <h6>Address: ${user.address}${user.adrress2}, ${user.city}, ${user.state}, ${user.zipCode}</h6>
                <h5>Total: $${(getTotal() * 1.07).toFixed(2)}</h5>
                `,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, place order!"
            }).then((result) => {
                if (result.isConfirmed) {
                    getOrder()
                }
            });
        }
        setValidated(true)
    }


    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='mt-3'>Purchase Summary</h1>

            <div className="cart-total-container container mb-1" >
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="d-flex flex-column align-items-center justify-content-around mt-3 p-2 rounded">

                            <div className="order-summary d-flex flex-row align-items-center justify-content-center">
                                <div className='d-flex order-summary-cost flex-column align-items-start justify-content-start'>
                                    <div className='cost-separator-checkout'>
                                        <span className="font-weight-bold">Subtotal:</span>
                                        <div></div>
                                        <span className="font-weight-bold">${getTotal().toFixed(2)}</span>
                                    </div>
                                    <div className='cost-separator-checkout'>
                                        <span className="font-weight-bold">Tax:</span>
                                        <div></div>
                                        <span className="font-weight-bold">${(getTotal() * 0.07).toFixed(2)}</span>
                                    </div>
                                    <div className='cost-separator-checkout mt-5'>
                                        <span className="font-weight-bold">Total:</span>
                                        <div></div>
                                        <span className="font-weight-bold">${(getTotal() * 1.07).toFixed(2)}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='form-container mt-3 mb-5'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                name='name'
                                type="text"
                                placeholder="John"
                                onChange={updateUser}

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                name='lastName'
                                type="text"
                                placeholder="Doe"
                                onChange={updateUser}

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>

                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" required name='email' onChange={updateUser} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                required
                                name='phone'
                                type="text"
                                placeholder="(999) 999 9999"
                                onChange={updateUser}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" required name='address' onChange={updateUser} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid address.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom07">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control type="text" placeholder="Suit/Apt/House" required name='address2' onChange={updateUser} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid address.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom08">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required name='city' onChange={updateUser} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom09">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required name='state' onChange={updateUser} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom10">
                            <Form.Label>Zip code</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required name='zipCode' onChange={updateUser} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 d-flex flex-column align-items-center justify-content-center">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                        <Button className='mt-2 buttom-color' type='submit'>Place order</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Checkout