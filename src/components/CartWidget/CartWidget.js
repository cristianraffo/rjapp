import './CartWidget.css';
import { FaCartArrowDown } from "react-icons/fa";

const CartWidget = () => {
    return (
        <>
            <nav>
                <FaCartArrowDown className='cartIcon' />
            </nav>
        </>
    );
};

export default CartWidget;