import Carousel from 'react-bootstrap/Carousel';
import Visa from '../assets/img/visa@2x.png'
import Pet1 from '../assets/img/amigo-star-pet_2023-06-21_16-36-12_0490.jpg'
import Pet2 from '../assets/img/wild-about-animals-1500x400.webp'
import Pet3 from '../assets/img/GDA-GATO-CERTO.jpg'

function Carosel() {
  return (
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <a href="/produtos"><img
          className="d-block w-100"
          src={Pet1}
          alt="First slide"
        /></a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/produtos"><img
          className="d-block w-100"
          src={Pet2}
          alt="First slide"
        /></a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/produtos"><img
          className="d-block w-100"
          src={Pet3}
          alt="First slide"
        /></a>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carosel;