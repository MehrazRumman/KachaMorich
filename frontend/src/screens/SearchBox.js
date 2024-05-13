import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useHistory  } from 'react-router-dom'



function SearchBox() {
    const [keyword,setKeyword ] = useState('')

  const submitHandler =(e) =>{
    e.preventDefault()
  }  
  return (
    <Form onSubmit={submitHandler} className='d-flex' >
        <Form.Control
        type = 'text'
        name = 'q'
        onChange={ (e) => setKeyword(e.target.value) }
        className="mr-sm-3 ml-sm-7"
        >

        </Form.Control>
      

        <Button
        type = 'submit'
        variant='outline-success'
        className='p-1'
        >
            Submit
        </Button>
      
    </Form>
  )
}

export default SearchBox




































