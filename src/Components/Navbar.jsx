import {useEffect,useState,useRef} from 'react'
import  {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const [showLinks, setshowLinks] = useState(true)
    //This function will hide/show links based on the window size so that nothing is missing when changing window size use .show

    const checkSize = () =>{
        if(window.innerWidth > 768){
            setshowLinks(true)
        }
        if(window.innerWidth < 768){
            setshowLinks(false)
        }
    }

    useEffect(() =>{
        checkSize()
        window.addEventListener('resize', checkSize)
        return () =>{
            window.removeEventListener('resize', checkSize)
        }
    })

  return (
    <div>NavBar</div>
  )
}

export default NavBar