import React from "react";
import styled from "styled-components";
import background from '.././images/nav_bg.svg';
import location from '.././images/location.svg';
import cart from '.././images/cart.svg';
import notify from '.././images/notify.svg';
import location_dropdown from '.././images/location_dropdown.svg';
import search from '.././images/magnify-glass.svg';
import filter from '.././images/filter-search.svg';


const Nav=()=>{
    return(
        <NavStyle>
            <div className="nav-top" >
                <div className="nav-top_first" >
                    <img src={location} alt="location" />
                    <div className="location-details">
                        <p>LOCATION</p>
                        <h2 className="dropdown" >Santiago de Querétaro <img src={location_dropdown} alt="location_dropdown" /> </h2>
                    </div>
                </div>
                <div className="nav-top_second" >
                    <img src={cart} alt="cart"  />
                    <img src={notify} alt="notify"  />
                </div>
            </div>
            <div className="input-container">
                <img src={search} alt="search"className="search-icon" />
                <img src={filter} alt="search"className="filter-icon" />
               <input placeholder="Search" /> 
            </div>
            
        </NavStyle>
    )
}
export default Nav;


const NavStyle=styled.nav`
background-color: black;
background-image: url(${background});
padding: 1rem;
padding-top: 4rem;
color: white;
.nav-top{
    display: flex;
    width:100%;
    justify-content: space-between;
    align-items: center;
    &>*{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    &_first{
        img{
            width:1.3rem;
        }
        p{
            font-size: 0.75rem;
            color: #C6C6C6;
        }
        h2{
            font-weight: 500;
            font-size: 1rem;
        }
    }
}
.dropdown{
display: flex;
align-items: center;
gap: 5px;
img{
    cursor: pointer;
}
}
.input-container{
    margin-top: 0.9rem;
    position: relative;

    .search-icon{
        position: absolute;
        top: 0.4rem;
        left: 0.5rem;
    }
    .filter-icon{
        position: absolute;
        top: 0.3rem;
        right: 0.5rem;
    }
    
    input{
    width: 100%;
    padding: 0.5rem 3rem;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 1rem;
    &:focus{
        border: none;
        outline: none;
    }
    &::placeholder{
        color: #d6d6d6;
    }
}
}

`;