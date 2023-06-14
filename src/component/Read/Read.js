import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Card, Col, Container,Row } from 'react-bootstrap'
const Read = () => {
    let [data,setData] = useState([])
    let api_url = "http://localhost:2000/product"  
    useEffect(() => {
     axios.get(api_url)
     .then(res=>{
        console.log("Axios res :",res);
        setData(res.data)
     })
     .catch(err=>{
        console.log("Axios err :",err);
        alert("Axios err ")
     })
      },[api_url,setData])

  return (
    <>
    <Container>
        <Row>
          {
            data?.map(prod=>(
                <React.Fragment key={prod.id}>
                    <Col className='m-2'>
                        <Card style={{width:"18rem"}}>
                            <Card.Body>
                                <Card.Title>
                                    {prod.pname}
                                </Card.Title>
                                <Card.Subtitle className=' text-muted pb-2'>{prod.company}</Card.Subtitle>
                                <Card.Text>
                                    {prod.desc}
                                </Card.Text>
                                <Card.Link href={`/details/${prod.id}`}>Details</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </React.Fragment>
            ))
          }
        </Row>
    </Container>
    </>
  )
}

export default Read