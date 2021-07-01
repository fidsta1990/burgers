import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import { Nav, Center, Header, Logo, Bar, Menu } from "./NavStyles";
import { NavLink, Link } from "react-router-dom";
import { links } from "../../utils/navDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartBtn, DesktopCartBtn } from "./CartBtn";

const Navbar = (props) => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleHandler = () => setToggleNav(!toggleNav);

  const closeNav = () => setToggleNav(false);

  // check window width size
  const checkSize = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 800) {
      closeNav();
    }
  };

  // close nav at ipad size
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
    // eslint-disable-next-line
  }, [toggleNav]);

  useEffect(() => {
    AOS.init({ duration: 0, once: true, delay: 0, easing: "ease-in" });
  }, []);

  return (
    <Nav className="navbar">
      <Center data-aos="zoom-in">
        <Header>
          {/* logo */}
          <Logo>
            <Link to="/" onClick={closeNav}>
              <GiChiliPepper className="chilli" /> Spicy Burger
            </Link>
          </Logo>
          {/* basket */}
          <CartBtn className="desktop-cart" onClick={props.onShowCart} />
          {/* bar */}
          <Bar onClick={toggleHandler}>
            {toggleNav ? (
              <FaTimes className="menuIcon" />
            ) : (
              <HiOutlineMenuAlt3 className="menuIcon" />
            )}
          </Bar>
        </Header>
        {/* menu */}
        <div className={toggleNav ? "links show" : "links"}>
          <Menu>
            {links.map((items, id) => {
              const { text, url } = items;
              return (
                <NavLink
                  activeClassName="active"
                  key={id}
                  to={url}
                  onClick={closeNav}
                >
                  {text}
                </NavLink>
              );
            })}
          </Menu>
        </div>
        <DesktopCartBtn onClick={props.onShowCart} />
      </Center>
    </Nav>
  );
};

export default Navbar;
