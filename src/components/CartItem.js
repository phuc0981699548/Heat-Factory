import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateItem, removeItem } from '../redux/shopping-cart/cartItemsSlide'
import numberWithCommas from '../utils/numberWithCommas'

const CartItem = props => {

    const dispatch = useDispatch()

    const [item, setItem] = useState(props.item)

    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (type) => {
        if (type === 'plus') {
            dispatch(updateItem({...item, quantity: quantity + 1 }))

        } else {
            dispatch(updateItem({...item, quantity: quantity - 1 < 1 ? 1 : quantity - 1 }))

        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <div className="flex justify-between gap-10 items-center">
            <div className="">
                <img
                    className="h-40 cursor-pointer"
                    src={item.product.image01}
                    alt=""
                />
            </div>

            <div className="">
                <div className="">
                    <Link to={`/catalog/${item.slug}`}>
                        {`${item.product.title} - ${item.color} - ${item.size}`}
                    </Link>
                </div>
                <div className="">{numberWithCommas(item.product.price)}</div>
            </div>

            <div className="flex gap-5">
                <div className="flex gap-8">
                    <div
                        className="bg-gray-200 px-1 cursor-pointer"
                        onClick={() => updateQuantity("minus")}
                    >
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className="">{quantity}</div>
                    <div
                        className="bg-gray-200 px-1 cursor-pointer"
                        onClick={() => updateQuantity("plus")}
                    >
                        <i className="bx bx-plus"></i>
                    </div>
                </div>

                <div 
                    className="bg-gray-200 px-1 cursor-pointer"
                    onClick={() => removeCartItem()}
                >
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem
