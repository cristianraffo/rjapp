export const products = [
    {
        "id": 0,
        "name": "Zapatillas",
        "price": 45000,
        "description": "Son zapatillas",
        "stock": 100,
        "colour": "Negra, roja, verde",
        "img": "https://picsum.photos/200/300",
        "longDescription": "Son zapatillas muy caras."
    },
    {
        "id": 1,
        "name": "Remeras",
        "price": 2000,
        "description": "Son remeras",
        "stock": 100,
        "colour": "Negra",
        "Talle": "",
        "img": "https://picsum.photos/200/300",
        "longDescription": "Remera economica marca naik"
    },
    {
        "id": 2,
        "name": "Pantalones",
        "price": 6000,
        "description": "Son pantalones",
        "stock": 100,
        "colour": "Rojo",
        "img": "https://picsum.photos/200/300",
        "longDescription": "Confeccionado en tejido suave y luce un corte clásico."
    },
    {
        "id": 3,
        "name": "Gorras",
        "price": 5000,
        "description": "Son gorras",
        "stock": 100,
        "colour": "Azul",
        "img": "https://picsum.photos/200/300",
        "longDescription": "Gorra con visera"
    }
]


export function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
    });
};