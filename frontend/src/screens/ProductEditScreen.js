import React,{useState,useEffect} from 'react'
import {Link, redirect ,useLocation ,useNavigate, useParams } from 'react-router-dom'
import { Form, Button , Row, Col , } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch,useSelector, } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { updateProduct ,listProductDetails} from '../actions/productAction'
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'


function ProductEditScreen() {
    
    
    const [name , setName  ] = useState('')
    const [price , setPrice  ] = useState(0)
    const [image , setImage  ] = useState('')
    const [ category , setCategory  ]  = useState('')
    const [countInStock , setCountInStock  ] = useState()
    const [description , setDescription  ] = useState('')

    
    const {id} = useParams();
    
    const dispatch = useDispatch()
    
    const location = useLocation()
    const history =useNavigate()
    
    
    const productDetails = useSelector(state => state.productDetails )
    
    const {error,loading,product } = productDetails



    const productUpdate = useSelector(state => state.productUpdate )
    
    const {error :errorUpdate,loading : loadingUpdate,success: successUpdate  } = productUpdate
    
    
    
   
    useEffect( ()=>{
           
            if(successUpdate){
              dispatch({type : PRODUCT_UPDATE_RESET})
              history('/admin/productlist')
            }else{

            
        
            if(!product.name || product._id !== Number( id) ){
                dispatch(listProductDetails(id))
                
            }else{
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
                
            }

          }
        
        
    },[ dispatch, product,id,history, successUpdate ] )
    
    
    const submitHandler = (e) => {
      e.preventDefault();
      // update product 
    
      dispatch(updateProduct({
        _id: id,
        name: name,
        price: price,
        image: image,
        category: category,
        countInStock: countInStock,
        description: description,
      }));
    }
    
    
    
    
    
    
    
    
    
    
    return (
        <div>
        
        <Link to='/admin/productlist'>
        Go Back
        </Link>
        
        <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader/> }
        { errorUpdate && <Message variant='danger'> {errorUpdate} </Message> }
      
        
        {loading ? <Loader/> : error  ? <Message variant='danger'>{error}</Message>
        : (
            
            
            
            
            <Form onSubmit = {submitHandler} >
            <Form.Group controlId='name'>
            <Form.Label>
            Name 
            </Form.Label>
            <Form.Control
            
            type = 'Name'
            placeholder = 'Enter Name'
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            >
            </Form.Control>
            </Form.Group>


            <Form.Group controlId='price'>
            <Form.Label>
            Price
            </Form.Label>
            <Form.Control
            
            type = 'numebr'
            placeholder = 'Enter Price'
            value = {price}
            onChange = {(e) => setPrice(e.target.value)}
            >
            </Form.Control>
            </Form.Group>


            <Form.Group controlId='image'>
            <Form.Label>
            Image
            </Form.Label>
            <Form.Control
            
            type = 'text'
            placeholder = 'Enter Image'
            value = {image}
            onChange = {(e) => setImage(e.target.value)}
            >
            </Form.Control>
            </Form.Group>


            <Form.Group controlId='category'>
            <Form.Label>
             Category
            </Form.Label>
            <Form.Control
            
            type = 'text'
            placeholder = 'Enter Category'
            value = {category}
            onChange = {(e) => setCategory(e.target.value)}
            >
            </Form.Control>
            </Form.Group>



            <Form.Group controlId='countinstock'>
            <Form.Label>
              Stock 
            </Form.Label>
            <Form.Control
            
            type = 'number'
            placeholder = 'Enter Stock'
            value = {countInStock}
            onChange = {(e) => setCountInStock(e.target.value)}
            >
            </Form.Control>
            </Form.Group>


            <Form.Group controlId='description'>
            <Form.Label>
              Description
            </Form.Label>
            <Form.Control
            
            type = 'text'
            placeholder = 'Enter Description'
            value = {description}
            onChange = {(e) => setDescription(e.target.value)}
            >
            </Form.Control>
            </Form.Group>
            
            
            
            
            
            
            
             <Button type = 'submit' variant='primary' style={{ marginBottom: '20px' }}>
               Update
            
             </Button>
            </Form>
            
        )}
        
        </FormContainer>
        
        </div>
        
    )
}

export default ProductEditScreen




























