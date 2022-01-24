import { useState } from 'react';
import './ItemCount.css';


export default function ItemCount() {

    const [count, setCount] = useState(0);

    const addItem = () => {
        setCount(count + 1);
    };

    const removeItem = () => {
        if (count === 0) {
            return;
        } else {
            setCount(count - 1);
        }       
    };

    return (
        <>
            <div className='counter-container'>
                <button onClick={removeItem} className='btn-counter'>-</button>
                <p className='count'>Qty: {count}</p>
                <button onClick={addItem} className='btn-counter'>+</button>
            </div>            
        </>
    )
}