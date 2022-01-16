import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shopping-cart/cartItemsSlide';

import Button from '@mui/material/Button';
import numberWithCommas from '../utils/numberWithCommas';
import { useNavigate } from 'react-router-dom';

const ProductView = props => {

    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined) product = {
      title: "",
      price: '',
      image01: null,
      image02: null,
      categorySlug: "",
      colors: [],
      slug: "",
      size: [],
      description: ""
    }

    let navigate = useNavigate()

    const [productView, setProductView] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)
    
    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setProductView(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {

        if (color === undefined) {
            alert('Vui lòng chọn màu sắc')
            return false
        }
        if (size === undefined) {
            alert('Vui lòng chọn size')
            return false
        }

        return true
    }

    const addToCart = () => {
      if (check()) {
          let newItem = {
              slug: product.slug,
              color: color,
              size: size,
              price: product.price,
              quantity: quantity
          }
          if (dispatch(addItem(newItem))) {
              alert('Success')
          } else {
              alert('Fail')
          }
      }
    }
    

    const goToCart = () => {
      if (check()) {
        let newItem = {
          slug: product.slug,
          color: color,
          size: size,
          price: product.price,
          quantity: quantity,
        };
        if (dispatch(addItem(newItem))) {
          alert("Success");
        } else {
          alert("Fail");
        }
        
        navigate("/cart")
      }
    }

    return (
      <div className="flex">
        {/* left content */}
        <div className="flex w-[60%] flex-wrap">
          <div className="w-[20%] cursor-pointer mr-5">
            <div className="mb-2 hover:ring-2 ring-2">
              <img
                src={product.image01}
                alt=""
                onClick={() => setProductView(product.image01)}
              />
            </div>
            <div className="hover:ring-2">
              <img
                src={product.image02}
                alt=""
                onClick={() => setProductView(product.image02)}
              />
            </div>
          </div>
          <div className="relative pt-[80%] grow">
            <img
              className="absolute top-0 l-[50%] h-full"
              src={productView}
              alt=""
            />
          </div>
          <div
            className={`w-full p-8  overflow-hidden relative ${
              descriptionExpand ? "" : "h-[400px]"
            }  `}
          >
            <div className="text-xl font-medium text-center">
              Chi tiết sản phẩm
            </div>
            <div
              className="text-base text-justify"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className="absolute bottom-2 left-[50%] translate-x-[-50%]">
              {descriptionExpand ? (
                <Button
                  onClick={() => setDescriptionExpand(!descriptionExpand)}
                  className="hover:scale-105 transition "
                  variant="contained"
                >
                  Thu gọn
                </Button>
              ) : (
                <Button
                  onClick={() => setDescriptionExpand(!descriptionExpand)}
                  className="hover:scale-105 transition "
                  variant="contained"
                >
                  Xem thêm
                </Button>
              )}
            </div>
          </div>
        </div>
        {/* end left content */}

        {/* right content */}
        <div className="ml-8 flex flex-col gap-y-3">
          <h3 className="text-2xl font-medium">{product.title}</h3>
          <div className="text-lg font-medium tracking-wide">
            <span className="block mb-3">
              {numberWithCommas(product.price)} $
            </span>
          </div>
          <div className="">
            <div className="font-medium mb-3">Màu sắc:</div>
            <div className="flex justify-between">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  className={`h-[53px] w-[53px] border-2 rounded-full cursor-pointer relative  ${
                    item === color ? "border-blue-400" : ""
                  } `}
                  onClick={() => setColor(item)}
                >
                  <div
                    className={`bg-${item}-500 h-[48px] w-[48px] flex absolute left-[50%] translate-x-[-50%] top-0 rounded-full`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="font-medium mb-3">Kích cỡ:</div>
            <div className="flex justify-between">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`h-[52px] w-[52px] border-2 rounded-full relative cursor-pointer ${
                    size === item ? "border-blue-400" : ""
                  } `}
                  onClick={() => setSize(item)}
                >
                  <div className="flex absolute left-[50%] translate-x-[-50%] bottom-4">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="font-medium mb-3 ">Số lượng:</div>
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
          </div>
          <div className="flex gap-5 mt-3">
            <Button
              className="hover:scale-105 transition"
              color="success"
              size="large"
              variant="contained"
              onClick={() => addToCart()}
            >
              THÊM VÀO GIỎ
            </Button>
            <Button
              className="hover:scale-105 transition"
              color="error"
              size="large"
              variant="contained"
              onClick={() => goToCart()}
            >
              MUA NGAY
            </Button>
          </div>
        </div>
        {/*  end right content */}
      </div>
    );
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default ProductView
