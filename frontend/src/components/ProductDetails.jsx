import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import AddToBasket from "./AddToBasket";

const ProductDetails = ({products}) => {
  //***** variables *****/ 
  let sizeArr = [];
  let colourArr = [];

  let currentSize = null;
  let currentColour = null;
  // let currentStockItem = null; 
  let [currentPrice, setPrice] = useState(null);
  let [currentDiscount, setDiscount] = useState(null);
  let [currentQuantity, setQuantity] = useState(null);

  const { colour } = useParams();
  if (colour) {
    currentColour = colour;
  }

  useEffect(() => {
    //***** update the document title using the browser API *****//
    changeSize(currentSize);
    changeColour(currentColour);
  }, []);

  //***** pushes one of every colour and size in seperate arrays  *****/ 
  products.stock.map((stock) => {
    if (!sizeArr.includes(stock.size)) {
        sizeArr.push(stock.size);
    }
    
    if (!colourArr.includes(stock.colour)) {
        colourArr.push(stock.colour);
    }
  });

  function getStockEntry(size, colour) {
    let selectedStockItem = null;

    //***** find the selected entry of the first matching colour if the size is null *****//
    for (const stock of products.stock) {
      if (!size && stock.colour === colour) {
        currentSize = stock.size;
        selectedStockItem = stock;
        break;
      }
      if (stock.size === size && stock.colour === colour) {
        selectedStockItem = stock;
        break;
      }
    }

    //***** work out the price, discount and quantity *****//
    if (selectedStockItem.discount) {
      setPrice(selectedStockItem.price);
      setDiscount((selectedStockItem.discount / 100) * selectedStockItem.price);
    } else {
      setPrice(selectedStockItem.price);
      setDiscount(null);
    }

    if(selectedStockItem.quantity <= 5) {
      setQuantity(selectedStockItem.quantity);
    } else {
      setQuantity(null);
    }
  }

  //***** function to select size of product from stock *****/
  function changeSize(clickedSize) {
    currentSize = clickedSize;

    getStockEntry(currentSize, currentColour);

    products.stock.map((stock) => {
      if (stock.size === clickedSize) {
        document.getElementById(clickedSize).classList.add('active-btn');
      } else if (stock.size !== clickedSize) {
        document.getElementById(stock.size).classList.remove('active-btn');
      }

      if (stock.size === clickedSize && stock.quantity === 0) {
        document.getElementById(stock.colour).classList.add('out-stock');
      } else if (stock.size === clickedSize && stock.quantity !== 0) {
        document.getElementById(stock.colour).classList.remove('out-stock');
      }
    })
  }

  //***** function to select colour of product from stock *****/
  function changeColour(clickedColour) {
    currentColour = clickedColour;
    getStockEntry(currentSize, currentColour);

    //***** adds images based on selected colour *****/
    products.image_collection.map((collect) => {
      if (collect.colour === clickedColour) {
        document.getElementById('product-img-1').src = collect.images[0];
        document.getElementById(clickedColour).classList.add('active-btn');
      } else if (collect.colour !== clickedColour) {
        document.getElementById(collect.colour).classList.remove('active-btn');
      }

      if (collect.colour === clickedColour && collect.images[1]) {
        document.getElementById('product-img-2').src = collect.images[1];
      } 
    })

    products.stock.map((stock) => {
      if (stock.colour === clickedColour && stock.quantity === 0) {
        document.getElementById(stock.size).classList.add('out-stock');
      } else if (stock.colour === clickedColour && stock.quantity !== 0 ) {
        document.getElementById(stock.size).classList.remove('out-stock');
      }
    })
  }

  return ( 
    <div>
        <div className="product-details">
          <div className="preview-images">
            <img src="../../public/product-placeholder.png" id="product-img-1" alt={products.title}></img>
            <img src="../../public/product-placeholder.png" id="product-img-2" alt={products.title}></img>
          </div>
          <div className="full-product-info">
            <h1>{products.title}</h1>
            <div className="product-prices">
              <p id="productPrice">{(currentPrice) ? `£${currentPrice.toFixed(2)}` : '£ --.--'}</p>
              <p id="productDiscount">{(currentDiscount) ? `-£${currentDiscount.toFixed(2)}` : null}</p>
            </div>

            <p>{products.description}</p>

            <div className="product-options">
                <label>Size:</label>
                {sizeArr.map((size, index) => (
                    <button id={size} onClick={() => changeSize(size)} key={`s${index}`}>{size}</button>
                ))}
            </div>
            
            <div className="product-options">
                <label>Colour:</label>
                {colourArr.map((colour, index) => (
                    <button 
                      id={colour} 
                      className={(currentColour === colour) ? 'active-btn' : null} 
                      key={`c${index}`} 
                      onClick={() => changeColour(colour)}>
                    {colour}</button>
                ))}
            </div>

            <p id="stockWarning">{(currentQuantity) ? `Only ${currentQuantity} items left!` : null}</p>

            <AddToBasket size={currentSize} colour={currentColour} />
          </div>
        </div>
    </div>
   );
}
 
export default ProductDetails;