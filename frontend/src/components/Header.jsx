import {React,useEffect, useRef} from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'

const navlink =[
  {
    path:"/home",
    display:"עמוד הבית"
  },
  {
    path:"/teacher",
    display:"מורים"
  },
  {
    path:"/services",
    display:"שירותים"
  },
  {
    path:"/contact",
    display:"צור קשר"
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickHeader =()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect (()=>{
    handleStickHeader()
    return ()=> window.removeEventListener('scroll',handleStickHeader)
  
  })

  const toggleMenu = ()=>{menuRef.current.classList.toggle('show_menu')}

  return (
    <>
    <header className='header flex items-center' ref={headerRef}>
      <div className='container' > 
       <div className='flex items-center justify-between'>
        <div>
          <img src="https://thumbs.dreamstime.com/z/education-logo-template-vector-icon-illustration-design-education-logo-template-120545469.jpg?w=768" width="100"/>
        </div>
        <div className='navigation' ref={menuRef} onClick={toggleMenu}> 
          <ul className='menu flex items-center gap-[2.7rem] '>
            {
              navlink.map((link , index)=>
              <li key={index}>
                <NavLink to={link.path} className={navClass=> navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[500]":"text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"}>{link.display}</NavLink>
              </li>)
            }
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          <div>
            <Link>
            <figure className='w-[35px] h-[35px] rouded-full cursor-pointer' >
              <img className='h-full rouded-full' src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1690029963~exp=1690030563~hmac=0ec8c0bf405ba5f3435ada655c6a8fe6d5e43a098aaab9470770da8ca261c791' alt=''/>
            </figure>
            </Link>
          </div>
          <Link to='/connect'>
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[50px]'>התחבר</button>
          </Link>

          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
        </div>
       </div>
      </div>
    </header>
    </>
   )
}

export default Header