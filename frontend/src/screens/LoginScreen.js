import React,{useState,useEffect} from 'react'
import {Link   } from 'react-router-dom'
import { Form, Button , Row, Col , } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch,useSelector, } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { login  } from '../actions/userActions'



function LoginScreen() {
  const [email , setEmail ] = useState('')
  const [password , setPassword ] = useState('')



  return (
    <FormContainer>
         <h1>Sign In</h1>
         <Form onSubmit = {submitHandler} >
            <Form.Group controlId='email'>
                <Form.Label>
                    Email Address
                </Form.Label>
                <Form.Control
                type = 'email'
                placeholder = 'Enter Email'
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                >

                </Form.Control>


            </Form.Group>

                        <Form.Group controlId='Password'>
                <Form.Label>
                
                </Form.Label>
                <Form.Control
                type = 'email'
                placeholder = 'Enter Email'
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                >

                </Form.Control>

            </Form.Group>


         </Form>
       
    </FormContainer>
  )
}

export default LoginScreen
