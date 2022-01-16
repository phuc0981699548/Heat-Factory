import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import PolicyCard from '../components/PolicyCard'
import ProductCard from '../components/ProductCard'
import Section, { SectionBody, SectionTitle } from '../components/Section'

import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

function Home() {
    return (
        <div>
            <Helmet title="Trang chủ">
                    
                    <HeroSlider />
                    
                    {/* policy */}
                    
                    <Section>
                        <SectionBody>
                            <div className="grid grid-cols-4 gap-10">
                                {policy.map((item, index) => (
                                    <Link key={index} to='/policy'>
                                        <PolicyCard                     
                                            name={item.name}
                                            description={item.description}
                                            icon={item.icon}
                                        />

                                    </Link>
                                ))}

                            </div>
                        </SectionBody>
                        
                    </Section> 
                    
                    {/* end policy */}

                    {/* top selling */}
                    
                    <Section>
                        <SectionTitle>
                            Top sản phẩm bán chạy trong tuần
                        </SectionTitle>
                        <SectionBody>
                            <div className="grid grid-cols-4 gap-10">
                                {productData.getProducts(4).map((item, index) => (
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
                    
                    {/* end top selling */}

                    {/* new */}
                    
                    <Section>
                        <SectionTitle>
                            Sản phẩm mới
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

                    {/* end new */}

                    <Section>
                        <SectionBody>
                            <Link to="/catalog">
                                <img 
                                    src="https://theme.hstatic.net/200000289033/1000684389/14/bg-newsletter.jpg?v=120" 
                                    alt="" 
                                    className="max-w-full"
                                />
                            </Link>
                        </SectionBody>
                    </Section>
                    
                    {/* end new */}
                    
                    {/* popular */}
                    
                    <Section>
                        <SectionTitle>
                            Phổ biến
                        </SectionTitle>
                        <SectionBody>
                            <div className="grid grid-cols-4 gap-10">
                                {productData.getProducts(12).map((item, index) => (
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

                    {/* end popular */}

                
            </Helmet> 
            
        </div>
    )
}

export default Home
