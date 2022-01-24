import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react';
import { getProducts } from '../../db';
import LoadingSpinner from '../LoadingSpinner/Spinner';


const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => setDetails(res))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);


    return (
        <>
            {loading ? <LoadingSpinner /> : (<ItemDetail key={details.id} />)}
        </>
    )
}

export default ItemDetailContainer;