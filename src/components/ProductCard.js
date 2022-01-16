import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice' 
import Button from '@mui/material/Button';
import numberWithCommas from '../utils/numberWithCommas'


const ProductCart = props => {
    
    const dispatch = useDispatch()


    return (
      <div className="mb-8 text-center">
        <Link to={`catalog/${props.slug}`}>
          <div className="pt-[100%] mb-8 relative overflow-hidden">
            <img
              className="transition-all duration-400 absolute top-0 opacity-100 hover:opacity-0 "
              src={props.img01}
              alt=""
            />
            <img
              className="transition-all duration-400 absolute top-0 opacity-0 hover:opacity-100 "
              src={props.img02}
              alt=""
            />
          </div>
          <h3 className="">{props.title}</h3>
          <div className="my-3">
            <strong>{numberWithCommas(props.price)}</strong>
            <span className="ml-3">
              <del>{numberWithCommas(399000)}</del>
            </span>
          </div>
        </Link>
        <div className="">
          <Button onClick={() => dispatch(set(props.slug))} className="hover:scale-105 transition" variant="contained">
            Chọn Mua
          </Button>
        </div>
      </div>
    );
}

ProductCart.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default ProductCart
