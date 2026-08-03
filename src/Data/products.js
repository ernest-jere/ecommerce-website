

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "99.99",
        image: "https://images.pexels.com/photos/20385204/pexels-photo-20385204.jpeg",
        description: "Premium wireless headphones with noice cancellation",
    },

    {
        id: 2,
        name: "Smart Watch",
        price: "399.99",
        image: "https://images.pexels.com/photos/31406903/pexels-photo-31406903.jpeg",
        description: "Houses optical heart rate monitors, blood oxygen (SpO₂) sensors, and electrical sensors for ECG tracking.Compact Logic Board: Contains ultra-lo",
    },

    {
        id: 3,
        name: "Laptop",
        price: "69.99",
        image: "https://images.pexels.com/photos/5793947/pexels-photo-5793947.jpeg",
        description: "Packs high-end dedicated graphics cards and advanced cooling systems for rendering intensive 3D games.",
    },

    {
        id: 4,
        name: "Smart Phone",
        price: "479.99",
        image: "https://images.pexels.com/photos/6388/apple-iphone-smartphone-technology.jpg",
        description: "Includes high-resolution front and rear lenses capable of digital photography and 4K video recording Camera System",
    },

    {
        id: 5,
        name: "Smart Glasses",
        price: "409.99",
        image: "https://images.pexels.com/photos/8386429/pexels-photo-8386429.jpeg",
        description: "Features front-facing lenses to capture hands-free photos and first-person video",
    },

    {
        id: 6,
        name: "Necklace",
        price: "179.99",
        image: "https://images.pexels.com/photos/20141640/pexels-photo-20141640.jpeg",
        description: "With a continuous, symmetric strand of closely set diamonds, running the full length of the band.",
    },

    {
        id: 7,
        name: "Codeless Mouse",
        price: "19.99",
        image: "https://images.pexels.com/photos/14363329/pexels-photo-14363329.jpeg",
        description: "Connects cleanly via Bluetooth or a USB radio frequency (RF) dongle to reduce desk clutter.",
    },

    {
        id: 8,
        name: "Laptop Bag",
        price: "79.99",
        image: "https://images.pexels.com/photos/12442665/pexels-photo-12442665.jpeg",
        description: "Uses water-resistant exterior fabrics like nylon or polyester to block rain.",
    },

    {
        id: 9,
        name: "Belts",
        price: "72.99",
        image: "https://images.pexels.com/photos/38053201/pexels-photo-38053201.jpeg",
        description: "A sleek, polished leather belt with a minimalist buckle worn with formal suits.",
    }

]


export function getProducts() {
    return products;
}

export function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}