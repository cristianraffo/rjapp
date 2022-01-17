import ItemCard from '../ItemCard/ItemCard';
import './ItemListContainer.css';


const ItemListContainer = () => {
    return (
        <>
            <ItemCard
                id='1'
                name='Uno'
                description='Lorem ipsum'
                price='2000'
            />

            <ItemCard
                id='2'
                name='Dos'
                description='Lorem ipsum'
                price='4000'
            />

            <ItemCard
                id='3'
                name='Tres'
                description='Lorem ipsum'
                price='4500'
            />

            <ItemCard
                id='4'
                name='Cuatro'
                description='Lorem ipsum'
                price='3000'
            />
        </>
    );
};

export default ItemListContainer;