import { Link } from 'react-router-dom'; // 1. Crucial Missing Import
import { useCart } from '../context/CartContext'; // 1. Crucial Missing Import

export default function ProductCard({ product }) { 
  const { addToCart, cart } = useCart(); // 2. Destructure the addToCart function and cartItems from the cart context
  const isInCart = cart.some(item => item.id === product?.id); // 3. Check if the cart has some item with the same product id as the current product. This will return true if the product is already in the cart, and false otherwise.
  const buttonText = isInCart ? "In Cart" : "Add To Cart"; // 4. Change button text based on cart status
  const quantityLabel = isInCart ? `Quantity: ${cart.find(item => item.id === product?.id)?.quantity}` : ""; // 5. Display quantity if in cart

  return ( 
    <div className="product-card"> 
      {/* 2. Added optional chaining (?.) to prevent crashes if data is loading */}
      <img 
        src={product?.image} 
        className="product-card-image" 
        alt={product?.name || "Product image"} 
      /> 
      
      <div className="product-card-content"> 
        <h3 className="product-card-name">{product?.name}</h3> 
        
        {/* 3. Styled price label */}
        <p className="product-card-price">${product?.price}</p> 
        
        <div className="product-card-actions"> 
          <Link className="btn btn-secondary" to={`/products/${product?.id}`}> 
            View Details 
          </Link> 
          <button className="btn btn-primary" onClick={() => addToCart(product?.id)}>
            { buttonText } { quantityLabel }
          </button> 
        </div> 
      </div> 
    </div> 
  );
}