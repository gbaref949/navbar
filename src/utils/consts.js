import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
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