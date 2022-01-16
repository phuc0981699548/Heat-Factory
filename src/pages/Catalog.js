import React, { useCallback, useEffect, useState } from 'react'

import Helmet from '../components/Helmet'
import ProductCard from '../components/ProductCard'
import Checkbox from '../components/Checkbox'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import color from '../assets/fake-data/products-color'
import size from '../assets/fake-data/product-size'
import { Button } from '@mui/material'

function Catalog() {

    const initFilter = {
        category: [],
        color: [],
        size: []
    }

    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if(checked) {
            switch(type) {
                case 'CATEGORY':
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break
                case 'COLOR':
                    setFilter({...filter, color: [...filter.color, item.color]})
                    break
                case 'SIZE':
                    setFilter({...filter, size: [...filter.size, item.size]})
                default:
            }
        } else {
            switch(type) {
                case 'CATEGORY':
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break
                case 'COLOR':
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({...filter, color: newColor})
                    break
                case 'SIZE':
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({...filter, size: newSize})
                default:
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(() => {
        
        let temp = productList
        
        if(filter.category.length > 0) {
            temp = temp.filter(e => filter.category.includes(e.categorySlug))

        }
        if(filter.color.length > 0) {
            temp = temp.filter(e => {
                const check = e.colors.find(color => filter.color.includes(color))
                return check !== undefined 
            })
        }
        if(filter.size.length > 0) {
            temp = temp.filter(e => {
                const check = e.size.find(size => filter.size.includes(size))
                return check !== undefined 
            })    
        }

        setProducts(temp)

    }, [filter, productList],)

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    return (
        <div>
            <Helmet title="Sản phẩm">
              
                    <div className="flex">
                        {/* filer */}
                        
                        <div className="w-[20%]">
                            <div className="mb-5">
                                <div className="font-medium text-lg mb-3">
                                    Danh mục sản phẩm -
                                </div>
                                <div className="">
                                    {category.map((item, index) => (
                                        <div key={index} className="text-sm">
                                            <Checkbox
                                                label={item.display}
                                                onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                                checked={filter.category.includes(item.categorySlug)}

                                            />

                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className="mb-5">
                                <div className="font-medium text-lg mb-3">
                                    Màu sắc -
                                </div>
                                <div className="">
                                    {color.map((item, index) => (
                                        <div key={index} className="text-sm">
                                            <Checkbox
                                                label={item.display}
                                                onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                                checked={filter.color.includes(item.color)}

                                            />

                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className="mb-5">
                                <div className="font-medium text-lg mb-3">
                                    Kích cỡ -
                                </div>
                                <div className="">
                                    {size.map((item, index) => (
                                        <div key={index} className="text-sm">
                                            <Checkbox
                                                label={item.display}
                                                onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                                checked={filter.size.includes(item.size)}

                                            />

                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className="">
                                <Button onClick={clearFilter} className="hover:scale-105 transition" variant="contained">Xóa bộ lọc</Button>
                            </div>
                        </div>
                        
                        {/* end filer */}

                        {/* products */}
                        
                        <div className="grid grid-cols-3 gap-5 grow">
                        {products.map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        title={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}

                                    />
                                ))}
                        </div>
                        
                        {/* end product */}
                    </div>
            </Helmet>
        </div>
    )
}

export default Catalog
