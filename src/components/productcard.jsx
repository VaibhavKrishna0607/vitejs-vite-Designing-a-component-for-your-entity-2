// write product card here
import React from "react";
import Button from "./button";

const Productcard = () =>{
    const productImage = 'Untitled.jpg';
    const productName = 'ASOIAF Book';
    const price = '$49';
   
    

    return(
        
        <div className = 'product-card-details'>
          
            <img src = {productImage} alt = {productImage} className="image"/>
            <div className="product-details">
                <h1>{productName}</h1>
                <h2>{price}</h2>
                <Button/>
                
                
            </div>

        </div>
    )
}

export default Productcard;

