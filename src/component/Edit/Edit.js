import React, { useEffect, useState } from 'react'
import {Form,Col,Row,Button} from "react-bootstrap"
import { useParams,useNavigate } from 'react-router-dom'
import axios from "axios"

const Edit = () => {
    let {pid} = useParams()
let [inputs,setData] = useState([])
let navi = useNavigate()
useEffect(() => {
axios.get(`http://localhost:2000/product/${pid}`)
.then(res=>{
    console.log("Axios res :",res);
    setData(res.data)
})
.catch(err=>{
    console.log("Axios err :",err);
    alert(err.message)
})
},[setData,pid])

let handelSubmit =(e)=>{
e.preventDefault();

console.log("Submitted values :",inputs);

axios.put(`http://localhost:2000/product/${inputs.id}`,inputs)
.then(res=>{
  console.log("Axios res :",res);
  alert("Edit is Done")
  navi("/")
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
        <h1>Edit Form</h1>
            <Row className='md-3'>
             <Form.Group as={Col}>
             <Form.Label>Product Name</Form.Label>
             <Form.Control
             type='text'
             name="pname"
             placeholder='Enter Product'
            value={inputs.pname}
             onChange={(e)=>{
                setData((prev)=>({...prev,pname:e.target.value}))
             }}
             />
             </Form.Group>

             <Form.Group as={Col}>
             <Form.Label>Product Company</Form.Label>
             <Form.Control
             type='text'
             name="company"
             placeholder='Enter Company'
            value={inputs.company}
            onChange={(e)=>{
                setData((prev)=>({...prev,company:e.target.value}))
             }}
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
             value={inputs.desc}
             row={2}
             onChange={(e)=>{
                setData((prev)=>({...prev,desc:e.target.value}))
             }}
             />
             </Form.Group>

             <Form.Group as={Col}>
             <Form.Label>Product Price</Form.Label>
             <Form.Control
             type='text'
             name="price"
             placeholder='Enter Product price'
             value={inputs.price}
             onChange={(e)=>{
                setData((prev)=>({...prev,price:e.target.value}))
             }}
             />
             </Form.Group>
            </Row><br/>

            <Button variant='outline-primary' type='submit'>Submit</Button>
        </Form>
    </div>
    </>
  )
}

export default Edit