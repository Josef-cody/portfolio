import Carousel from 'react-bootstrap/Carousel';

function SlideShow() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 heroImg"
          src="imgs/Hero1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="heroText">
          <h3>Welcome to Josef's</h3>
          <h1>Portfolio</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 heroImg"
          src="imgs/Hero2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="heroText">
        <h3>Welcome to Josef's</h3>
          <h1>Portfolio</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 heroImg"
          src="imgs/Hero3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="heroText">
        <h3>Welcome to Josef's</h3>
          <h1>Portfolio</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;