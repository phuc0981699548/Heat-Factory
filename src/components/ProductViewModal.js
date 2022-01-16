import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/product-modal/productModalSlice' 

import ProductView from './ProductView'
import productData from '../assets/fake-data/products'

function ProductViewModal() {

    const productSlug = useSelector((state) => state.productModal.value)

    const dispatch = useDispatch()

    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug])



    return (
        <div className={`fixed z-[100] top-0 left-0 w-full h-full overflow-auto pt-[100px] bg-black-rgba ${product === undefined ? 'hidden' : 'block'}`}>
            <div className="m-auto p-2 w-[50%] bg-white transition relative ">
                <ProductView product={product} />
                <div className="absolute top-0 right-0">
                    <Button onClick={() => dispatch(remove())} variant="contained">Đóng</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
