import React from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'
import Section, { SectionTitle, SectionBody } from '../components/Section'

import productData from '../assets/fake-data/products'

const Product = props => {

    const params = useParams()
    
    const product = productData.getProductBySlug(params.slug)


    return (
        <Helmet title={product.title}>
                <Section>
                    <SectionBody>
                        <ProductView product={product} />
                    </SectionBody>
                </Section>

                <Section>
                    <SectionTitle>
                        Khám phá thêm
                    </SectionTitle>
                    <SectionBody>
                    <div className="grid grid-cols-4 gap-10">
                        {productData.getProducts(8).map((item, index) => (
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
                    </SectionBody>
                </Section>
            
        </Helmet>
    )
}


export default Product
