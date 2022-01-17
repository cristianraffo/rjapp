import './ItemCard.css';

const ItemCard = ({id, name, description, price}) => {
    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <img src='https://picsum.photos/200/300' className='card-img' />
                    <h2 className='card-title'>{name}</h2>
                    <p className='card-description'>{description}</p>
                    <p className='card-price'>Price: {price}</p>
                </div>
                <button className='card-btn'>Buy</button>
            </div>
        </>
    );
};

export default ItemCard;