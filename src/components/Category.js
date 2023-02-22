import React from "react";
import styled from "styled-components";
import { defaultPadding, orangeDefault } from "./styles/GlobalStyle";



export const CategoryHeader=({h2,p})=>{
    return(
        <CategoryHeaderStyle>
        <div className="category-header">
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
        
        </CategoryHeaderStyle>
    )
};


const CategoryHeaderStyle=styled.div`
padding: ${defaultPadding};
.category-header{
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
h2{
    font-size: 1rem;
    font-weight: 700;
}
p{
color: ${orangeDefault};
}
}
`