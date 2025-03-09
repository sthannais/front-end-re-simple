import Carousel from 'react-bootstrap/Carousel';
import botellin from '../img/botellín.png';
import monito from '../img/monito.png';
import pinturita from '../img/pinturita.png';
import '../styles/carousel.css';

function CarouselComponent() {
  return (
    <div className="carousel">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="carousel__image" src={botellin} alt="botellin" width="500px" />
          <Carousel.Caption>
            <h5>Recicla el Vidrio</h5>
            <p>¡Dale una nueva vida al vidrio! 🌱♻️</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel__image" src={monito} alt="monito" width="500px" />
          <Carousel.Caption>
            <h5>Recicla tus envases</h5>
            <p>Cada envase cuenta. ¡Recíclalo y conviértelo en algo nuevo! 📦♻️</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel__image" src={pinturita} alt="pinturita" width="500px" />
          <Carousel.Caption>
            <h5>Reciclar es Arte</h5>
            <p>Transforma tus botellas en creatividad. 🎨♻️</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
