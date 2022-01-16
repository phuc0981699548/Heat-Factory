import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Helmet from '../components/Helmet'
import numberWithCommas from '../utils/numberWithCommas'

import productData from '../assets/fake-data/products'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import CartItems from '../components/CartItem'


function Cart() {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState([])

    const [totalProducts, setTotalProducts] = useState(0)
    
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsDetail(cartItems))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [cartItems])

    return (
      <Helmet title="Giỏ hàng">
        <div className=" my-20 flex gap-10">
            
            <div className="w-[40%] shadow-2xl p-10  h-full">
                
                <div className="">
                    <p className="">
                        Bạn đang có <strong>{totalProducts}</strong> sản phẩm trong giỏ hàng
                    </p>
                    <div className="flex justify-between my-5">
                        <span>Thành tiền:</span>
                        <span>{numberWithCommas(totalPrice)}</span>
                    </div>
                </div>
                
                <div className="flex flex-col gap-5">
                    <Button
                        className="hover:scale-105 transition "
                        variant="contained"
                    >
                        ĐẶT HÀNG
                    </Button>
                    <Link to="/catalog">
                        <Button
                        className="hover:scale-105 transition w-full"
                        variant="contained"
                        >
                        TIẾP TỤC MUA HÀNG
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="">
                {cartProducts.map((item, index) => (
                    <div key={index} className="mb-5">
                        <CartItems item={item}  />

                    </div>

                ))}
            </div>
        </div>
      </Helmet>
    );
}

export default Cart
