import React from "react";
import styled from "styled-components";
import { CategoryHeader } from "./Category";
import { defaultPadding } from "./styles/GlobalStyle";
// Images
import imageOne from '.././images/near-you-one.svg';
import imageTwo from '.././images/near-you-two.svg';
import imageThree from '.././images/near-you-three.svg';
import imageFour from '.././images/near-you-four.svg';
import restaurantLogo from '.././images/restaurant-logo.svg';
import verify from '.././images/verify.svg';
import motor from '.././images/motor.svg';
import clock from '.././images/delivery-clock.svg';
import favorite from '.././images/favourite.svg';



const FoodNearYou=()=>{
    const itemsArray=[{
        img:imageOne,
        amount:"75.00",
        location:"Blue House",
        name:"Wawu Steak"
    },{
        img:imageTwo,
        amount:"55.00",
        location:"Wanda Villa",
        name:"Japan Hot Noodles"
    },{
        img:imageThree,
        amount:"75.00",
        location:"Blue House",
        name:"Japan pizza"
    },{
        img:imageFour,
        amount:"55.00",
        location:"Wanda Villa",
        name:"Wawu Fried Rice"
    }]
    return(
        <FoodNearYouStyle>
             <CategoryHeader h2={"Food near you"} p={"See all"} />
             <div className="container">
                {
                    itemsArray.map((item)=>(
                        <div className="item-near">
                            <img src={favorite} className="favorite" />
                            <div className="item-near_image-container" style={{
                                backgroundImage:`url(${item.img})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover",
                                backgroundPosition:"center"
                            }}>
                            </div>
                            <h2 className="item-near_header">{item.name}</h2>
                            <div className="amount" >
                                <p>
                                    GHS
                                </p>
                                <h2>
                                    {item.amount}
                                </h2>
                            </div>
                    <div className="delivery">
                    <div className="restaurant" >
                    <div className="restaurant-logo" ></div>
                    <div className="restaurant-content" >
                    <div className="restaurant-name" >
                            {item.location}
                            <img src={verify} className="verify"/>
                           
                        </div>
                        <div className="delivery-time">
                        <img src={motor} className="motor"/>
                        <img src={clock} className="clock"/>
                        <p>15 - 20 min</p>
                        </div>
                    </div>
                        
                        
                    </div>
                        
                        
                    </div>
                        </div>
                    ))
                }
             </div>
             
        </FoodNearYouStyle>
    )
}
export default FoodNearYou;

const FoodNearYouStyle=styled.section`
 margin-bottom: 7rem;
 .container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: ${defaultPadding};
    gap: 10px;
 }
.item-near{
    width:48%;
    height: 25rem;
    position: relative;
    /* background-color: gray; */
    border-radius: 7px;
    
    .favorite{
        position: absolute;
        right: .5rem;
        top: .5rem;
    }
    &_image-container{
        width: 100%;
        height: 70%;
        border-radius: 7px;
        overflow: hidden;
        box-shadow: 0px 9px 29px rgba(0, 0, 0, 0.25);
    }
    &_header{
        font-size: 1.1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding:0 1rem;
        margin-top: 0.2rem;
    }
}
.amount{
    display: flex;
    padding:0 1rem;
    gap: 10px;
    p{
        color: #F67246;
    }
    h2{
        font-size: 1.7rem;
    }
}
.delivery{
    
    padding:0 1rem;
    .restaurant{
        display: flex;
    }
    .restaurant-logo{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-image: url(${restaurantLogo});
        margin-right: 0.5rem;
    }
    .restaurant-name{
        font-weight: 500;
    }
    .verify{
        margin-left: 0.2rem;
    }
    .delivery-time{
        display: flex;
        gap: 2px;
        color: #828181;
    }
}
`;