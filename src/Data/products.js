

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "R99.99",
        image: "https://images.pexels.com/photos/20385204/pexels-photo-20385204.jpeg",
        description: "Premium wireless headphones with noice cancellation",
    },

    {
        id: 2,
        name: "Smart Watch",
        price: "R399.99",
        image: "https://images.pexels.com/photos/31406903/pexels-photo-31406903.jpeg",
        description: "Houses optical heart rate monitors, blood oxygen (SpO₂) sensors, and electrical sensors for ECG tracking.Compact Logic Board: Contains ultra-lo",
    },

    {
        id: 3,
        name: "Laptop",
        price: "R679.99",
        image: "https://images.pexels.com/photos/5793947/pexels-photo-5793947.jpeg",
        description: "Packs high-end dedicated graphics cards and advanced cooling systems for rendering intensive 3D games.",
    },

    {
        id: 4,
        name: "Smart Phone",
        price: "R479.99",
        image: "https://images.pexels.com/photos/6388/apple-iphone-smartphone-technology.jpg",
        description: "Includes high-resolution front and rear lenses capable of digital photography and 4K video recording Camera System",
    },

    {
        id: 5,
        name: "Smart Glasses",
        price: "R409.99",
        image: "https://images.pexels.com/photos/8386429/pexels-photo-8386429.jpeg",
        description: "Features front-facing lenses to capture hands-free photos and first-person video",
    },

    {
        id: 6,
        name: "Neckless",
        price: "R179.99",
        image: "https://images.pexels.com/photos/20141640/pexels-photo-20141640.jpeg",
        description: "With a continuous, symmetric strand of closely set diamonds, running the full length of the band.",
    }
]


export function getProducts() {
    return products;
}