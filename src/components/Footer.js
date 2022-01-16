import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';

const footerLink = [
    {
        display: 'Giới thiệu',
        path: '/about'
    },
    {
        display: 'Liên hệ',
        path: '/about'
    },
    {
        display: 'Tuyển dụng',
        path: '/about'
    },
    {
        display: 'Tin tức',
        path: '/about'
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about'
    }
]

const footerLinkCustom = [
    {
        display: 'Chính sách đổi trả',
        path: '/about'
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about'
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about'
    },
]

function Footer() {
    return (
        <div>
            <footer className="bg-black p-12">
                <div className="grid grid-cols-4 gap-x-4  ">
                    <ul className="">
                        {footerLink.map((item, index) => (
                            <li key={index} className="text-stone-100 text-base uppercase mb-2">
                                <Link to={item.path}>
                                    {item.display}
                                </Link>

                            </li>
                        ))}
                    </ul>
                    <ul className="">
                        {footerLinkCustom.map((item, index) => (
                            <li key={index} className="text-neutral-500 hover:text-stone-100 text-base mb-2 transition duration-600">
                                <Link to={item.path}>
                                    {item.display}
                                </Link>

                            </li>
                        ))}
                    </ul>
                    <ul>

                    </ul>
                    <ul className=" flex gap-4  ">
                        <div className="text-neutral-500 hover:text-stone-100 cursor-pointer transition duration-300">
                            <TwitterIcon />
                        </div>
                        <div className="text-neutral-500 hover:text-stone-100 cursor-pointer transition duration-300">
                            <FacebookIcon />
                        </div>
                        <div className="text-neutral-500 hover:text-stone-100 cursor-pointer transition duration-300">
                            <InstagramIcon />
                        </div>
                        <div className="text-neutral-500 hover:text-stone-100 cursor-pointer transition duration-300">
                            <YouTubeIcon />
                        </div>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
