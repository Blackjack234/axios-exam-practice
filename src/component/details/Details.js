import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from "axios"
import { Button, Image } from 'react-bootstrap'

const Details = () => {
    let {pid} = useParams()
    let navi = useNavigate()
    // console.log("Product Id is ",pid);
     let [data,setData] = useState([])
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
      
      let handelDelete = (id)=>{
        console.log("Product ID id For delete ",id);
        let msg = window.confirm("Are you sure??");

        if(msg === true){
           axios.delete(`http://localhost:2000/product/${id}`)
           .then(res=>{
             console.log("Axios res :",res);
             alert("Product is deleted")
             navi("/")
           })
           .catch(err=>{
                console.log("Axios err :",err);
                alert(err.message)
           })
        }
      }
  return (
    <div className='Container p-5'>
     <div className='row md-3'>
      <div className='col p-5'>
       <Image
       src='https://img.paisawapas.com/ovz3vew9pw/2021/10/06223906/amazon-trending.jpg'
       width={300}
       height={250}
       rounded
       />
      </div>
      <div className='col p-5'>
        <div className='row md-3'>
            <div className='col'>
             Product:- {data.pname}
            </div>
            <div className='col'>
             Company:- {data.company}
            </div>
            <div className='col'>
              Price:- {data.price}
            </div>
        </div> <br/>
        <div className='row'>
          <div className='col'>
           {data.desc}
          </div>
        </div><br/>
        <Link to={`/edit/${data.id}`}><Button variant='outline-warning'>Edit</Button></Link>{' '}
        <Button variant='outline-danger' onClick={()=>{handelDelete(data.id)}}>Delete</Button>
        
      </div>
     </div>
    </div>
  )
}

export default Details