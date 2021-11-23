import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../assets/stylesheets/product.css';
import Toronja from '../../assets/toronja.png'

export const Product = ({nombre, precio, descripcion}) => {
    return (
        <Card style={{ width: "18rem" }} className="product">
        <Card.Img variant="top" src={Toronja} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{descripcion}</Card.Subtitle>
          <Card.Text>
            {precio}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
