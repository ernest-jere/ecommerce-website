import { Link } from 'react-router-dom'; // 1. Crucial Missing Import

export default function ProductCard({ product }) { 
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
          <button className="btn btn-primary">
            Add To Cart
          </button> 
        </div> 
      </div> 
    </div> 
  );
}