import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../Data/products';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchedProduct = getProductById(id);
        if (!fetchedProduct) {
            navigate('/NotFound');
            return;
        } else {
            setProduct(fetchedProduct);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    };

   return (
  <div className="page">
    <div className="container">
      {/* Structural Block Container */}
      <div className="product-detail"> 
        
        {/* Left Column wrapper */}
        <div className="product-detail-image-box"> 
          <img src={product?.image} alt={product?.name || "Product image"} /> 
        </div> 
        
        {/* Right Column wrapper */}
        <div className="product-detail-content"> 
          <h1 className="product-detail-name">{product?.name}</h1> 
          <p className="product-detail-description">{product?.description}</p> 
          <p className="product-detail-price">Price: ${product?.price}</p> 
          
          <button type="button" className="btn btn-primary">
            Add To Cart
          </button> 
        </div> 

      </div> 
    </div> 
  </div>
);
}