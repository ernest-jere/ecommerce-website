import { Link } from "react-router-dom";
import { getProducts } from "../Data/products.js";
import ProductCard from "../components/ProductCard";


export default function Home() {
    const products = getProducts();
    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Welcome To ShopHub</h1>
                <p className="home-subtitle">Discover Amazing Products At Great Prices</p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard product={product}  key={product.id} />                
                    ))}
                </div>
            </div>
        </div>
    )
}