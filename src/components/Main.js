import React from 'react'
import Card from 'react-bootstrap/Card';

const Main = () => {
  return (
  <main>
    <h1 className='Novedades'>Ingresos Recientes</h1>
    <div className='displayCard'>
        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./img/tomo1.jpg" />
        <Card.Body>
            <Card.Title>Call of the Nigth Tomo N°1</Card.Title>
            <Card.Text>
            $1.500,00
            </Card.Text>  
        </Card.Body>
        </Card>

        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./img/tomo2.jpg" />
        <Card.Body>
            <Card.Title>Atelier of Witch Hat - Tomo N°10</Card.Title>
            <Card.Text>
            $1.250,00
            </Card.Text>  
        </Card.Body>
        </Card>

        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./img/tomo4.jpg" />
        <Card.Body>
            <Card.Title>Higehiro - Tomo N° 1</Card.Title>
            <Card.Text>
            $1.350,00
            </Card.Text>  
        </Card.Body>
        </Card>
        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./img/voley.jpg" />
        <Card.Body>
            <Card.Title>Haikyu!! - Tomo N° 13</Card.Title>
            <Card.Text>
            $1.650,00
            </Card.Text>  
        </Card.Body>
        </Card>
    </div>

    <h1 className='Novedades'>Destacados</h1>
    <div className='displayCard'>
        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./img/onepiece.jpg" />
        <Card.Body>
            <Card.Title>One Piece - Tomo N°66</Card.Title>
            <Card.Text>
            $1.500,00
            </Card.Text>  
        </Card.Body>
        </Card>

        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./img/tomo22.jpg" />
        <Card.Body>
            <Card.Title>Chainsaw Man - Tomo N° 1</Card.Title>
            <Card.Text>
            $1.250,00
            </Card.Text>  
        </Card.Body>
        </Card>

        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./img/tomo33.jpg" />
        <Card.Body>
            <Card.Title>Call of the Nigth Tomo N°1</Card.Title>
            <Card.Text>
            $1.350,00
            </Card.Text>  
        </Card.Body>
        </Card>
        <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./img/full.jpg" />
        <Card.Body>
            <Card.Title>Call of the Nigth Tomo N°1</Card.Title>
            <Card.Text>
            $1.650,00
            </Card.Text>  
        </Card.Body>
        </Card>
    </div>
    <div className='svgIg1'>
        <img className='svgIg' src='ig.svg'></img>
        <p>MangaStore</p>
    </div>
    <div className='flexIg'>
        <img  className='flexIg2' src='./img/1.jpg'></img>
        <img  className='flexIg2'src='./img/2.jpg'></img>
        <img  className='flexIg2' src='./img/3.jpg'></img>
        <img  className='flexIg2' src='./img/4.jpg'></img>
    </div>
        <article>
            <h2 className='article' >MANGA STORE</h2>
            <p className='article'>Nos dedicamos a la venta online de manga. Nacimos de la pasión por el manga y el anime, queremos crecer junto a vos llevando este maravilloso entretenimiento a cada rincón..</p>
        </article>
  </main>
  )
}

export default Main



