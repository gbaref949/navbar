import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {Home, Abouts, Carts, Error, Products, Admin} from "../Pages";

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        page: <Home/>
    },
    {
        id: 2,
        url: '/about',
        text: 'Abouts',
        page: <Abouts/>
    },
    {
        id: 3,
        url: '/cart',
        text: 'Carts',
        page: <Carts/>
    },
    {
        id: 4,
        url: '*',
        text: 'Error',
        page: <Error/>
    },
    {
        id: 5,
        url: '/products',
        text: 'Products',
        page: <Products/>
    },
]

export const socials = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook/>
    },
    {
        id: 2,
        url: 'https://twitter.com',
        icon: <FaTwitter/>
    },
    {
        id: 3,
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin/>
    },
    {
        id: 4,
        url: 'https://github.com/',
        icon: <FaGithub/>
    },
]