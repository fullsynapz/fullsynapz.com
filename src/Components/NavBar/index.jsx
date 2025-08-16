import LogoIcon from '../../assets/logo.svg';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = ({ chaild }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setIsOpen(false);
    }
    const tonavbarData = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Contact Us', path: '/contact' },
    ]

    useEffect(() => {
        const currentpath = window.location.pathname;
        console.log(currentpath);
        const currentTab = tonavbarData.find(item => item.path === currentpath);
        if (currentTab) {
            setActiveTab(currentTab.name);
        }
    }, [window.location.pathname]);

    const navigation=useNavigate()

    return (
        <>
            <nav className="top-navbar">
                <div className="logo">
                    <img src={LogoIcon} alt="FullSynapz Logo" className="logo-img"  onClick={()=> {
                        navigation('/')
                        window.location.reload()
                    }} style={{ cursor: "pointer" }}/>
                </div>
                <div className={`navbar-links-container ${isOpen ? "show" : ""}`}>

                    {tonavbarData.map((item, index) => (
                        <Link key={index} className={`navbar-links ${activeTab === item.name ? "activate-tab" : ""}`} to={item.path} onClick={() => handleTabClick(item.name)}>
                            <span className="logo-text">{item.name}</span>
                        </Link>
                    ))}

                </div>
                <div className='navbar-profile'>

                </div>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
            </nav>
            <div className="main-content">
                {chaild}

            </div>
        </>

    )
}

export default Navbar;