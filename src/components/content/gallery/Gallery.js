import { React } from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import Footer from "./../footer/Footer";
import titleClasses from "../contact/Contact.module.css";
import classes from "./Gallery.module.css";

const images = [
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664060/intro_image_k5d5ae.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664060/intro_image_k5d5ae.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664053/img07_t1mmyp.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664053/img07_t1mmyp.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664053/img04_g5k1do.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664053/img04_g5k1do.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664045/img02_td6wnh.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664045/img02_td6wnh.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664040/img05_sd0lnc.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664040/img05_sd0lnc.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664038/img09_cbo2jl.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664038/img09_cbo2jl.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664038/img06_duys3t.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653664038/img06_duys3t.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663990/lis_image_d8jdy3.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663990/lis_image_d8jdy3.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663982/gps_xerqx2.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663982/gps_xerqx2.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663982/gps_xerqx2.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgyknmlc/image/upload/v1653663982/gps_xerqx2.jpg",
  },
];

const Gallery = () => {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-green)" }}>
        <Container>
          <div
            className={titleClasses.titleSection}
            style={{ color: "var(--color-white)" }}
            data-aos="zoom-in"
          >
            <h1 style={{ color: "var(--color-white)" }}>Gal??rie sn??mk??</h1>
            <p style={{ maxWidth: "35rem" }}>
              Prohl??dn??te si galerii, kter?? obsahuje spoustu sn??mku po????zen??ch
              p??i pr??ci v pr??b??hu sezony roku 2021.
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.imageGalleryWrapper} data-aos="zoom-in">
        <ImageGallery items={images} showPlayButton={false} />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
