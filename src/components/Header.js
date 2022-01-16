import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const mainNav = [
    {
        display: 'Trang chủ',
        path: '/'
    },
    {
        display: 'Sản Phẩm',
        path: '/catalog'
    },
    {
        display: 'Phụ kiện',
        path: '/accessories'
    },
    {
        display: 'Liên hệ',
        path: '/contact'
    }
]

function Header() {
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef()

    
    useEffect(() => {
        const handleScrollTop = () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.style.height = '50px'
                headerRef.current.classList.add('scroll-header')
            } else {
                headerRef.current.style.height = '100px'
                headerRef.current.classList.remove('scroll-header')

    
            }
        }

        window.addEventListener('scroll',handleScrollTop)
        
        return () => {
            window.removeEventListener('scroll',handleScrollTop)
        }
    }, [])

    return (
        <div>
            <header ref={headerRef} className="flex justify-around py-2 mb-3 items-center bg-white transition-all duration-400">
                    <div className="">
                        <img src='https://theme.hstatic.net/200000289033/1000684389/14/logo.png?v=121' 
                            alt="G-lab-logo"
                            className="h-12 cursor-pointer"
                        />
                    </div>
                    <div className="flex ">
                        {mainNav.map((item,index) => (
                            <div key={index} className={`ml-7 uppercase font-normal ${index === activeNav ? 'text-red-600' : 'text-black'} `}>
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))}

                    </div>
                    <div className="flex gap-3">
                        <div className="menu-r1">
                            <SearchIcon />
                        </div>
                        <div className="menu-r1">
                            <Link to='/cart'>
                                <ShoppingBasketIcon />
                            </Link>
                        </div>
                        <div className="menu-r1">
                            <PersonIcon />
                        </div>
                    </div>
            </header>
        </div>
    )
}

export default Header
