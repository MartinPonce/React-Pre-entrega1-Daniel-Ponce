import aumados from "./images/aumados.jpg";
import aumados1 from "./images/aumados1.jpg";
import vista from "./images/vista.jpg";
import vista1 from "./images/vista1.jpg";
import vista2 from "./images/vista2.png";


export const productosHC = [
    { 
        id: 100, 
        name: "glasses Armani",
        category: "vision", 
        precio: 250, 
        stock: 10, 
        imagen: "aumados", 
    },
    { 
        id: 101, 
        name: "sun glasses Oakley", 
        category: "vision", 
        precio: 120, 
        stock: 7, 
        imagen: "aumados1", 
    },
    { 
        id: 102, 
        name: "glasses Ray Ban", 
        category: "vision", 
        precio: 280, 
        stock: 12, 
        imagen: "vista", 
    },
    { 
        id: 103, 
        name: "sun glasses Sensaya", 
        category: "vision", 
        precio: 150, 
        stock: 13,
        imagen: "vista1", 
    },
    { 
        id: 104, 
        name: "sun glasses Unofficial", 
        category: "vision", 
        precio: 130, 
        stock: 18,
        imagen: "vista2", 
    },
];

/*   img: "/images/aumados.jpg"

<img src={producto.img} alt={producto.name} />      */