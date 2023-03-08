import React,{useEffect,useState} from 'react'
import productos from '../productos/productos';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";



const ItemDetailContainer = () => {
  const {id}=useParams();
  console.log(id);
  const producto=productos.find(producto =>producto.id =id)
  return (
    <div>

       <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title>{producto.titulo}</Card.Title>
              <Card.Text>{producto.precio}</Card.Text>
              <Card.Text>{producto.detalle}</Card.Text>
            </Card.Body>
          </Card>

    </div>
  )
}

export default ItemDetailContainer