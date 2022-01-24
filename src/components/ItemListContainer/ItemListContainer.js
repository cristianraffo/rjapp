import Itemlist from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { getProducts } from '../../db';
import LoadingSpinner from '../LoadingSpinner/Spinner';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);


    return (
        <>
            {loading ? <LoadingSpinner /> : (<Itemlist />)}
        </>
    )
}

export default ItemListContainer;