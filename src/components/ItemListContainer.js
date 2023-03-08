import React from "react";
import productos from "../productos/productos";
import Card from "react-bootstrap/Card";
import { useParams,Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  console.log(greeting);
  const {id}=useParams();

  const productosFiltrados = id && productos.filter(productos =>
    productos.categoria === id
  )

  return (
    <>
    <h1 className='Novedades'>Ingresos Recientes</h1>
    <div className="displayCard">
      {productosFiltrados ? productosFiltrados.map((producto) => (
        <Link to={`/item/${producto.id}`}>
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title>{producto.titulo}</Card.Title>
              <Card.Text>{producto.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      )): productos.map((producto) => (
        <Link to={`/item/${producto.id}`}>
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title>{producto.titulo}</Card.Title>
              <Card.Text>{producto.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Link>))}
    </div>
    </>
  );
};

export default ItemListContainer;
