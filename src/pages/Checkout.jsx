import {useCart} from "../context/CartContext";


export default function Checkout() {
    const { getCartItemsWithProducts, 
        updateCartItemQuantity, 
        removeFromCart, getCartTotal } = useCart();
    const cartItemsWithProducts = getCartItemsWithProducts();
    const cartTotal = getCartTotal();

    function placeOrder() {
        alert("Order placed successfully!");
        // Clear the cart after placing the order
        cartItemsWithProducts.forEach(item => removeFromCart(item.id));
    }

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title"> Checkout </h1>
                <div className="checkout-container">
                    <div className="checkout-items" key="item.id">
                        <h2 className="checkout-section-title">Order Summary</h2>
                        {cartItemsWithProducts.map((item) => (
                            <div className="checkout-item" key={item.id}>
                                <img 
                                    src={item.product?.image || "placeholder.jpg"} 
                                    alt={item.product?.name || "Product image"} className="checkout-item-image" />
                                <div className="checkout-item-details">
                                    <h3 className="checkout-item-name">{item.product?.name || "Product Name"}</h3>
                                    <p className="checkout-item-price">Price: ${item.product?.price || "0.00"} each</p>
                                </div>
                                <div className="checkout-item-controls checkout-item-details">
                                    <h3 className="checkout-item-name">Quantity:</h3>
                                    <div className="quantity-controls">
                                        <button 
                                        className="quantity-btn" 
                                        onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>
                                            -
                                        </button>
                                        <span className="quantity-value">{item.quantity || 0}</span>
                                        <button 
                                        className="quantity-btn" 
                                        onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>
                                    </div>
                                    
                                </div>
                                <p className="checkout-item-total">
                                    Total: ${item.product?.price && item.quantity 
                                    ? Number(item.product.price * item.quantity).toFixed(2) 
                                    : "0.00"}
                                </p>

                                <button 
                                    className="btn btn-secondary btn-small" 
                                    onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-summary">
                        <h2 className="checkout-section-title">Total</h2>
                        <div className="checkout-total">
                            <p className="checkout-total-label">Subtotal:</p>
                            <p className="checkout-total-value">${cartTotal.toFixed(2)}</p>
                        </div>
                        <div className="checkout-total">
                            <p className="checkout-total-label">Total:</p>
                            <p className="checkout-total-value checkout-total-final">${cartTotal.toFixed(2)}</p>
                        </div>
                        <button className="btn btn-primary btn-large" onClick={placeOrder}>
                            Proceed to Payment
                        </button>
                    </div>
                           

                </div>
            </div>
        </div>
    )
}