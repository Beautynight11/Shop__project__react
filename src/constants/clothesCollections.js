import shirt from '../images/Rectangle.png'
import photo1 from "../images/men.png";
import dress from "../images/dress.png";
import photo2 from "../images/Women.png";

export const MenCollections = [
    {
        name: 'Men',
        title: 'collection',
        collection: 'Shoes, pullovers, costumes',
        photo: photo1,
        collections: [
            {
                id: 1,
                img: shirt,
                name: 'Shirt',
                price: 20
            },
            {
                id: 2,
                img: shirt,
                name: 'Shirt',
                price: 20
            },
            {
                id: 3,
                img: shirt,
                name: 'Shirt',
                price: 20
            },
            {
                id: 4,
                img: shirt,
                name: 'Shirt',
                price: 20
            },

        ]
    },
]

export const WomenCollections = [
    {
        name: 'Women',
        title: 'collection',
        collection: 'Shoes, pullovers, costumes',
        photo: photo2,
        collections: [
            {
                id: 5,
                img: dress,
                name: 'Dress',
                price: 50
            },
            {
                id: 6,
                img: dress,
                name: 'Dress',
                price: 50
            },
            {
                id: 7,
                img: dress,
                name: 'Dress',
                price: 50
            },
            {
                id: 8,
                img: dress,
                name: 'Dress',
                price: 50
            },
        ]
    }
]
