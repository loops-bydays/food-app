import React from "react";
import styled from "styled-components";
import homeTab from '.././images/home-tab.svg';
import ordersTab from '.././images/orders-tab.svg';
import restaurantTab from '.././images/restaurant-tab.svg';
import profileTab from '.././images/profile.svg';






const BottomNav=()=>{
    const itemArray=[{
        img:ordersTab,
        text:"Orders"
},{
    img:restaurantTab,
    text:"Restaurant"
}
,{
    img:profileTab,
    text:"Profile"
}];
    return(
        <BottomNavStyle>
            <div>
<img src={homeTab} />
<p style={{
    color:"#f67246"
}}>Home</p>
                    </div>
            {
                itemArray.map((item)=>(
                    <div>
<img src={item.img} />
<p>{item.text}</p>
                    </div>
                ))
            }
        </BottomNavStyle>
    )
};

export default BottomNav;

const BottomNavStyle=styled.nav`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background-color: white;
padding:1.5rem 1rem;
display: flex;
justify-content: space-around;
&>*{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
p{
    color:#c1c1c1 ;
    font-size: .9rem;
    
}
`