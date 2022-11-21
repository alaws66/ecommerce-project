const ProductDetails = ({products}) => {
  //***** variables *****/ 
  let sizeArr = [];
  let colourArr = [];

  let currentSize = null;
  let currentColour = null;
  let currentStockItem = null;

  //***** pushes one of every colour and size in seperate arrays  *****/ 
  products.stock.map((stock) => {
    if (!sizeArr.includes(stock.size)) {
        sizeArr.push(stock.size);
    }
    
    if (!colourArr.includes(stock.colour)) {
        colourArr.push(stock.colour);
    }
  });

  //***** function to show correct price + discount from user selection *****/
  function getStockEntry(size, colour) {
    currentStockItem = `${size}, ${colour}`;

    //***** get price and discount html tags *****/
    const productPrice = document.getElementById('productPrice');
    const productDiscount = document.getElementById('productDiscount');
    const lowStock = document.getElementById('stockWarning');

    //***** map through stock array *****/
    products.stock.map((stock) => {
      if (stock.size === size && stock.colour === colour && stock.discount) {
        productPrice.textContent = `£${stock.price.toFixed(2)}`;

        //***** calculate and show discount *****/
        let discountPrice = (stock.discount / 100) * stock.price;
        productDiscount.textContent = `-£${discountPrice.toFixed(2)}`;

        //***** if discount doesn't exist show only price *****/
      } else if (stock.size === size && stock.colour === colour) {
        productPrice.textContent = `£${stock.price.toFixed(2)}`;
        productDiscount.textContent = '';
      }

      if (stock.size == size && stock.colour === colour && stock.quantity <= 5) {
        lowStock.textContent = `Only ${stock.quantity} items left!`;
      } else if (stock.size == size && stock.colour === colour && stock.quantity > 5) {
        lowStock.textContent = '';
      }
    })
  }

  //***** function to select size of product from stock *****/
  function changeSize(size) {
    currentSize = size;

    getStockEntry(currentSize, currentColour);

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
    })
  }

  //***** function to select colour of product from stock *****/
  function changeColour(colour) {
    currentColour = colour;

    getStockEntry(currentSize, currentColour);

    //***** adds images based on selected colour *****/
    products.image_collection.map((collect) => {
      if (collect.colour === colour) {
        document.getElementById('product-img-1').src = collect.images[0];
        document.getElementById(colour).classList.add('active-btn');
      } else if (collect.colour !== colour) {
        document.getElementById(collect.colour).classList.remove('active-btn');
      }

      if (collect.colour === colour && collect.images[1]) {
        document.getElementById('product-img-2').src = collect.images[1];
      } 
    })

    products.stock.map((stock) => {
      if (stock.colour === colour && stock.quantity === 0) {
        document.getElementById(stock.size).classList.add('out-stock');
      } else if (stock.colour === colour && stock.quantity !== 0 ) {
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
              <p id="productPrice">&pound; --.--</p>
              <p id="productDiscount"></p>
            </div>

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

            <p id="stockWarning"></p>

            <button className="add-btn">Add to Basket</button>
          </div>
        </div>
    </div>
   );
}
 
export default ProductDetails;