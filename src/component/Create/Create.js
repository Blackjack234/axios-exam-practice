import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Create = () => {
    let [inputs,setInput] = useState({pname:"",company:"",desc:"",price:""})
    let navigate = useNavigate()
    let handelChange =(e) => {
        e.persist()
        let {name,value} = e.target

        console.log("Input name ",name," input value ",value);
        setInput({...inputs,[name]:value})
    }  

    let handelSubmit = (e) =>{
        e.preventDefault();
        let api_url = "http://localhost:2000/product"
        let data = {
            pname:inputs.pname,
            company:inputs.company,
            desc:inputs.desc,
            price:inputs.price
        }

        axios.post(api_url,data)
        .then(res=>{
            console.log("Axios res :",res);
            alert("Product Added")
            navigate("/")
        })
        .catch(err=>{
            console.log("Axios err :",err);
            alert(err.message)
        })
    }
  return (
    <>
    <div className='Container p-5'>
        <Form className='p-5 bg-secondary-subtle' onSubmit={handelSubmit}>
        <h1>Registration Form</h1>
            <Row className='md-3'>
             <Form.Group as={Col}>
             <Form.Label>Product Name</Form.Label>
             <Form.Control
             type='text'
             name="pname"
             placeholder='Enter Product'
             required
             onChange={handelChange}
             />
             </Form.Group>

             <Form.Group as={Col}>
             <Form.Label>Product Company</Form.Label>
             <Form.Control
             type='text'
             name="company"
             placeholder='Enter Company'
             required
             onChange={handelChange}
             />
             </Form.Group>
            </Row>
            <Row className='md-3'>
            <Form.Group as={Col}>
             <Form.Label>Product Description</Form.Label>
             <Form.Control
             as='textarea'
             name="desc"
             placeholder='Enter Description'
             required
             row={2}
             onChange={handelChange}
             />
             </Form.Group>

             <Form.Group as={Col}>
             <Form.Label>Product Price</Form.Label>
             <Form.Control
             type='text'
             name="price"
             placeholder='Enter Product price'
             required
             onChange={handelChange}
             />
             </Form.Group>
            </Row><br/>

            <Button variant='outline-primary' type='submit'>Submit</Button>
        </Form>
    </div>
    </>
  )
}

export default Create