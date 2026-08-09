import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../Data/products';
import { useCart } from '../context/cartContext'; // 1. Crucial Missing Import

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    const { addToCart, cart } = useCart(); // 2. Destructure the addToCart function and cartItems from the cart context
    const isInCart = cart.some(item => item.id === product?.id); // 3. Check if the cart has some item with the same product id as the current product. This will return true if the product is already in the cart, and false otherwise.
    const buttonText = isInCart ? "In Cart" : "Add To Cart"; // 4. Change button text based on cart status
    const quantityLabel = isInCart ? `Quantity: ${cart.find(item => item.id === product?.id)?.quantity}` : ""; // 5. Display quantity if in cart
    

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
          
          <button type="button" className="btn btn-primary" onClick={() => addToCart(product?.id)}>
            { buttonText } { quantityLabel }
          </button> 
        </div> 

      </div> 
    </div> 
  </div>
);
}