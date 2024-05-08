import React,{useState,useEffect} from 'react'
import {Link, redirect ,useLocation ,useNavigate, useParams } from 'react-router-dom'
import { Form, Button , Row, Col , } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch,useSelector, } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { getUserDetails  } from '../actions/userActions'
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider'


function EditUserScreen() {
    c
    
    const [name , setName  ] = useState('')
    
    const [email , setEmail ] = useState('')
  
    const [isAdmin , setAdmin ] = useState(false)

    const {id} = useParams();
    
    const dispatch = useDispatch()
    
    const location = useLocation()
    const history =useNavigate()
    

    const userDetails = useSelector(state => state.userDetails )
    
    const {error,loading,user } = userDetails
    
    useEffect( ()=>{
        
    },[] )
    
    
    const submitHandler = (e) => {
        e.preventDefault ()
          
        
        
    }
    
    
    
    
    
    
    
    
    
    
    return (
        <FormContainer>
        <h1>Edit User</h1>

        <Form onSubmit = {submitHandler} >
        <Form.Group controlId='name'>
        <Form.Label>
        Name 
        </Form.Label>
        <Form.Control
        required 
        type = 'Name'
        placeholder = 'Enter Name'
        value = {name}
        onChange = {(e) => setName(e.target.value)}
        >
        </Form.Control>
        </Form.Group>
        
        <Form.Group controlId='email'>
        <Form.Label>
        Email Address
        </Form.Label>
        <Form.Control
        required
        type = 'email'
        placeholder = 'Enter Email'
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        >
        </Form.Control>
        </Form.Group>
        
        <Form.Group controlId='Password'>
        <Form.Label>
        Password
        </Form.Label>
        <Form.Control
        required
        type = 'password'
        placeholder = 'Enter Password'
        value = {password}
        onChange = {(e) => setPassword(e.target.value)}
        >
        
        </Form.Control>
        
        </Form.Group>
        
        <Form.Group controlId='PasswordConfirm'>
        <Form.Label>
        Confirm  Password
        </Form.Label>
        <Form.Control
        required
        type = 'password'
        placeholder = 'Confirm Password'
        value = {confirmPassword}
        onChange = {(e) => setConfirmPassword(e.target.value)}
        >
        
        </Form.Control>
        
        </Form.Group>
        
        <Button type = 'submit' variant='primary' style={{ marginBottom: '20px' }}>
        Register
        
        </Button>
        </Form>
        
        
        <Row className='py-3'>
        <Col>
        Have an account  ? 
        <Link 
        to = {redirect? `/login?redirect=${redirect}` : '/login' }>Sign In</Link>
        </Col>
        
        </Row>
        </FormContainer>
    )
}

export default EditUserScreen




























