import React from "react";
import styled from "styled-components";
import { CategoryHeader } from "./Category";
import { defaultPadding } from "./styles/GlobalStyle";
// Images
import imageOne from '.././images/cat-food-one.svg';
import imageTwo from '.././images/cat-food-two.svg';
import imageThree from '.././images/cat-food-three.svg';


import background from '.././images/nav_bg.svg';

const FindByCategory=()=>{
    const categoryArray=[{
        img:imageOne,
        text:"Noodles"
    },{
        img:imageTwo,
        text:"Salad"
    },{
        img:imageThree,
        text:"Steak"
    },{
        img:imageOne,
        text:"Noodles"
    },{
        img:imageTwo,
        text:"Salad"
    }];
return(
    <FindByCategoryStyle>
        <CategoryHeader h2={"Find by Category"} p={"See all"} />
        <div className="item-container" >
        {
            categoryArray.map((category)=>(
                <div className="category-item" >
                    <p>{category.text}</p>
                    <img src={category.img} alt={category.text} />
                </div>
            ))
        }
        </div>
        

    </FindByCategoryStyle>
)
}
export default FindByCategory;

const FindByCategoryStyle=styled.div`
 .item-container{
    display: flex;
    padding: ${defaultPadding};
    width: 100%;
    overflow-x: scroll;
    gap: 15px;
    align-items: center;

    .category-item{
        min-width: 10rem;
        height: 6rem;
        background-color: black;
        background-image: url(${background});
        border-radius: 7px;
        position: relative;
        overflow: hidden;
        color: white;
        padding: 0.5rem;
        img{
position: absolute;
bottom: 0;
right: 0;
width:70%;        }
   
}
 }

`