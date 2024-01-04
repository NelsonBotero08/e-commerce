import React, { useEffect, useState } from "react";
import SimilarProducts from "./SimilarProducts";
import "../style/ProductIdPage/ProductIdCard.css";
import { Link } from "react-router-dom";
import { addProductToCartThunk } from "../../store/slices/Cart.slice";
import { useDispatch } from "react-redux";
import ModalErrorAddToCart from "../../pages/ModalErrorAddToCart";
import ModalAddCart from "../../pages/ModalAddCart";

const ProductIdCard = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImages, setSelectedImages] = useState({});
  const [currentImage, setCurrentImage] = useState(productId?.images[0].url);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (productId && productId.images && productId.images.length > 0) {
      setCurrentImage(productId.images[0].url);
    }
  }, [productId]);

  const handleClick = (imageId) => {
    setSelectedImages((prevSelectedImages) => {
      const newImageSelected = {};

      Object.keys(prevSelectedImages).forEach((id) => {
        newImageSelected[id] = false;
      });

      newImageSelected[imageId] = !prevSelectedImages[imageId];

      setCurrentImage(
        newImageSelected[imageId]
          ? productId?.images.find((img) => img.id === imageId)?.url
          : productId?.images[0].url
      );

      return newImageSelected;
    });
  };

  const handleMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handlePrevImage = () => {
    const currentIndex = productId.images.findIndex(
      (img) => img.url === currentImage
    );
    const prevIndex =
      (currentIndex - 1 + productId.images.length) % productId.images.length;
    const newImage = productId.images[prevIndex].url;

    setCurrentImage(newImage);
  };

  const handleNextImage = () => {
    const currentIndex = productId.images.findIndex(
      (img) => img.url === currentImage
    );
    const nextIndex = (currentIndex + 1) % productId.images.length;
    const newImage = productId.images[nextIndex].url;

    setCurrentImage(newImage);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProductToCartThunk(productId?.id, quantity));
    if (showSuccessModal && activeId) {
      setShowErrorModal(true);
      setTimeout(() => {
        setShowErrorModal(false);
      }, 2000);
    } else {
      setShowSuccessModal(true);
      setActiveId(productId?.id);
    }
  };

  return (
    <div className="productid">
      <div className="productid">
        <section className="section__title--productid">
          <h3 className="title--productid">
            <span className="link--productid">
              <Link to="/">Home</Link>
            </span>
            <span className="brand--productid">
              <p className="pointseparator--productid"></p>
              {productId?.title}
            </span>
          </h3>
        </section>
        <article className="article__productid">
          <section className="section__images--productid">
            <section className="main_image">
              <i className="bx bx-chevrons-left" onClick={handlePrevImage}></i>
              <img
                className="img__product"
                src={currentImage}
                alt={productId?.title}
              />
              <i className="bx bx-chevrons-right" onClick={handleNextImage}></i>
            </section>

            <div className="carrusel__img--product">
              <ul className="ul__img">
                {productId?.images.map((img) => (
                  <li
                    key={img.id}
                    onClick={() => handleClick(img.id)}
                    className="li__img"
                  >
                    <img
                      className={`images__product ${
                        selectedImages[img.id] ? "selected" : ""
                      }`}
                      src={img.url}
                      alt={productId?.title}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="info__productid">
            <h3 className="brand__info--productid">{productId?.brand}</h3>
            <h2 className="title__info--productid">{productId?.title}</h2>
            <p className="description__info--productid">
              {productId?.description}
            </p>
            <section className="section__butonsandprice">
              <div className="div__price-info">
                <h3 className="price__info--label">Price</h3>
                <span className="price__info--value">$ {productId?.price}</span>
              </div>
              <section className="div__quantity">
                <h3 className="price__info--label">Quantity</h3>
                <div className="btn__quantity">
                  <button className="quantity__btn" onClick={handleMinus}>
                    -
                  </button>
                  <div className="value__quamtity">{quantity}</div>
                  <button className="quantity__btn" onClick={handlePlus}>
                    +
                  </button>
                </div>
              </section>
            </section>
            <div className="div__btn--addtocart">
              <button onClick={handleAddToCart} className="btn__addtocart">
                Add to cart
              </button>
            </div>
          </section>
        </article>
        <section className="section__similarProducts">
          <SimilarProducts
            categoryId={productId?.category.id}
            idProduct={productId?.id}
          />
        </section>
        <section
          className={`modal__addtocart ${
            showSuccessModal && activeId === productId?.id ? "showmodal" : ""
          }`}
        >
          {showSuccessModal && activeId === productId?.id && <ModalAddCart />}
        </section>
        <section
          className={`modal__addtocart ${showErrorModal ? "showmodal" : ""}`}
        >
          {showErrorModal && activeId === productId?.id && showSuccessModal && (
            <ModalErrorAddToCart />
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductIdCard;
