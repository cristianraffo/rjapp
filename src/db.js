export const products = [
    {
        "id": 0,
        "name": "Zapatillas",
        "price": 25000,
        "description": "Son zapatillas",
        "stock": 100,
        "img": "https://picsum.photos/200/300"
    },
    {
        "id": 1,
        "name": "Remeras",
        "price": 2000,
        "description": "Son remeras",
        "stock": 100,
        "img": "https://picsum.photos/200/300"
    },
    {
        "id": 2,
        "name": "Pantalones",
        "price": 6000,
        "description": "Son pantalones",
        "stock": 100,
        "img": "https://picsum.photos/200/300"
    },
    {
        "id": 3,
        "name": "Gorras",
        "price": 5000,
        "description": "Son gorras",
        "stock": 100,
        "img": "https://picsum.photos/200/300"
    }
]


export function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
    });
};