const ProductDetails = ({products}) => {
  let sizeArr = [];
  let colourArr = [];

  products.stock.map((stock) => {
    if (!sizeArr.includes(stock.size)) {
        sizeArr.push(stock.size)
    }
    
    if (!colourArr.includes(stock.colour)) {
        colourArr.push(stock.colour)
    }
  });

  function changeSize(size) {
    products.stock.map((stock) => {
      if (stock.size === size) {
        document.getElementById(size).classList.add('active-btn');
      } else if (stock.size !== size) {
        document.getElementById(stock.size).classList.remove('active-btn');
      }

      if (stock.size === size && stock.quantity === 0) {
        document.getElementById(stock.colour).classList.add('out-stock');
      } else if (stock.size === size && stock.quantity !== 0) {
        document.getElementById(stock.colour).classList.remove('out-stock');
      }

      // if (stock.size === size && stock.discount) {
      //   console.log(stock.discount);
      // }
    })
    
  }

  function changeColour(colour) {
    products.image_collection.map((collect) => {
      if (collect.colour === colour) {
        document.getElementById('product-img').src = collect.images[0];
        document.getElementById(colour).classList.add('active-btn');
      } else if (collect.colour !== colour) {
        document.getElementById(collect.colour).classList.remove('active-btn');
      }
    })

    products.stock.map((stock) => {
      if (stock.colour === colour && stock.quantity === 0) {
        document.getElementById(stock.size).classList.add('out-stock');
      } else if (stock.colour === colour && stock.quantity !== 0 ) {
        document.getElementById(stock.size).classList.remove('out-stock');
      }

      // if (stock.colour === colour && stock.discount) {
      //   console.log(stock.discount);
      // }
    })
    
  }

  return ( 
    <div>
        <div className="product-details">
          <div className="preview-images">
            <img src="../../public/product-placeholder.png" id="product-img"></img>
          </div>
          <div className="product-info">
            <h1>{products.title}</h1>

            {/* {products.stock.map(({ size, colour, price, discount }) => (
              <div>
                {discount && (
                  <p>{discount}% off</p>
                )}
              </div>
            ))} */}

            <p>{products.description}</p>

            <div className="product-options">
                <label>Size:</label>
                {sizeArr.map((size) => (
                    <button id={size} onClick={() => changeSize(size)}>{size}</button>
                ))}
            </div>
            
            <div className="product-options">
                <label>Colour:</label>
                {colourArr.map((colour) => (
                    <button id={colour} onClick={() => changeColour(colour)}>{colour}</button>
                ))}
            </div>

            <button className="add-btn">Add to Basket</button>
          </div>
        </div>
    </div>
   );
}
 
export default ProductDetails;