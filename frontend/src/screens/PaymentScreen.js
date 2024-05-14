import React, { useState, useEffect } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen() {
  const history = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();
  // user select this
  const [paymentMethod, setPaymentMethod] = useState("Bkash");
  // const {paymentMethodB,setPaymentMethodB} = useState('Bkash')

  if (!shippingAddress.address) {
    history("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Bkash"
              id="Bkash"
              name="paymentMethod"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Conitnue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
