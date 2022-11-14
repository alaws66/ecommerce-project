import {useParams} from "react-router-dom";

const ProductDetails = () => {
  const products = [
    {
      key: 1,
      description : "Pellentesque venenatis tellus vehicula felis dictum, luctus semper nisi mollis. Nunc nibh diam, porta id ultricies vel, hendrerit non felis.",
      categories : [
          "clothing",
          "unisex",
          "tops",
          "pullovers"
      ],
      stock : [
          {
              size : 8.0,
              colour : "Grey",
              price : 16.99,
              quantity : 12.0
          },
          {
              size : 8.0,
              colour : "Black",
              price : 16.99,
              quantity : 8.0
          },
          {
              size : 8.0,
              colour : "Orange",
              price : 16.99,
              quantity : 3.0
          },
          {
              size : 8.0,
              colour : "Pink",
              price : 16.99,
              discount : 20.0,
              quantity : 15.0
          },
          {
              size : 8.0,
              colour : "Blue",
              price : 16.99,
              quantity : 7.0
          },
          {
              size : 8.0,
              colour : "Green",
              price : 16.99,
              discount : 30.0,
              quantity : 2.0
          },
          {
              size : 10.0,
              colour : "Grey",
              price : 16.99,
              quantity : 23.0
          },
          {
              size : 10.0,
              colour : "Black",
              price : 16.99,
              quantity : 19.0
          },
          {
              size : 10.0,
              colour : "Orange",
              price : 16.99,
              discount : 15.0,
              quantity : 1.0
          },
          {
              size : 10.0,
              colour : "Pink",
              price : 16.99,
              quantity : 10.0
          },
          {
              size : 10.0,
              colour : "Blue",
              price : 16.99,
              quantity : 13.0
          },
          {
              size : 10.0,
              colour : "Green",
              price : 16.99,
              discount : 30.0,
              quantity : 5.0
          },
          {
              size : 12.0,
              colour : "Grey",
              price : 16.99,
              quantity : 8.0
          },
          {
              size : 12.0,
              colour : "Black",
              price : 16.99,
              quantity : 7.0
          },
          {
              size : 12.0,
              colour : "Orange",
              price : 16.99,
              discount : 30.0,
              quantity : 3.0
          },
          {
              size : 12.0,
              colour : "Pink",
              price : 16.99,
              discount : 20.0,
              quantity : 7.0
          },
          {
              size : 12.0,
              colour : "Blue",
              price : 16.99,
              quantity : 2.0
          },
          {
              size : 12.0,
              colour : "Green",
              price : 16.99,
              quantity : 20.0
          },
          {
              size : 14.0,
              colour : "Grey",
              price : 16.99,
              discount : 20.0,
              quantity : 12.0
          },
          {
              size : 14.0,
              colour : "Black",
              price : 16.99,
              quantity : 0.0
          },
          {
              size : 14.0,
              colour : "Orange",
              price : 16.99,
              quantity : 3.0
          },
          {
              size : 14.0,
              colour : "Pink",
              price : 16.99,
              discount : 20.0,
              quantity : 0.0
          },
          {
              size : 14.0,
              colour : "Blue",
              price : 16.99,
              quantity : 15.0
          },
          {
              size : 14.0,
              colour : "Green",
              price : 16.99,
              quantity : 9.0
          },
          {
              size : 16.0,
              colour : "Grey",
              price : 16.99,
              quantity : 4.0
          },
          {
              size : 16.0,
              colour : "Black",
              price : 16.99,
              quantity : 18.0
          },
          {
              size : 16.0,
              colour : "Orange",
              price : 16.99,
              quantity : 19.0
          },
          {
              size : 16.0,
              colour : "Pink",
              price : 16.99,
              quantity : 4.0
          },
          {
              size : 16.0,
              colour : "Blue",
              price : 16.99,
              quantity : 0.0
          },
          {
              size : 16.0,
              colour : "Green",
              price : 16.99,
              discount : 50.0,
              quantity : 6.0
          },
          {
              size : 18.0,
              colour : "Grey",
              price : 16.99,
              quantity : 0.0
          },
          {
              size : 18.0,
              colour : "Black",
              price : 16.99,
              discount : 40.0,
              quantity : 7.0
          },
          {
              size : 18.0,
              colour : "Orange",
              price : 16.99,
              quantity : 8.0
          },
          {
              size : 18.0,
              colour : "Pink",
              price : 16.99,
              discount : 20.0,
              quantity : 0.0
          },
          {
              size : 18.0,
              colour : "Blue",
              price : 16.99,
              discount : 15.0,
              quantity : 2.0
          },
          {
              size : 18.0,
              colour : "Green",
              price : 16.99,
              quantity : 0.0
          }
      ],
      title : "Cotton hoodie",
      showPrice: 16.99
    },
    {
      key: 2,
      description : "Pellentesque venenatis tellus vehicula felis dictum, luctus semper nisi mollis. Nunc nibh diam, porta id ultricies vel, hendrerit non felis.",
      title : "Straight leg denim jean",
      categories : [
          "clothing",
          "unisex",
          "bottoms",
          "jeans"
      ],
      stock : [
          {
              size : "W26L30",
              colour : "Light Wash",
              price : 30.0,
              quantity : 4.0
          },
          {
              size : "W26L30",
              colour : "Medium Wash",
              price : 30.0,
              discount : 15.0,
              quantity : 5.0
          },
          {
              size : "W26L30",
              colour : "Dark Wash",
              price : 30.0,
              quantity : 9.0
          },
          {
              size : "W28L30",
              colour : "Light Wash",
              price : 30.0,
              quantity : 7.0
          },
          {
              size : "W28L30",
              colour : "Medium Wash",
              price : 30.0,
              discount : 20.0,
              quantity : 15.0
          },
          {
              size : "W28L30",
              colour : "Dark Wash",
              price : 30.0,
              quantity : 14.0
          },
          {
              size : "W30L32",
              colour : "Light Wash",
              price : 30.0,
              quantity : 19.0
          },
          {
              size : "W30L32",
              colour : "Medium Wash",
              price : 30.0,
              quantity : 0.0
          },
          {
              size : "W30L32",
              colour : "Dark Wash",
              price : 30.0,
              discount : 15.0,
              quantity : 2.0
          },
          {
              size : "W32L32",
              colour : "Light Wash",
              price : 30.0,
              discount : 30.0,
              quantity : 7.0
          },
          {
              size : "W32L32",
              colour : "Medium Wash",
              price : 30.0,
              quantity : 0.0
          },
          {
              size : "W32L32",
              colour : "Dark Wash",
              price : 30.0,
              quantity : 12.0
          },
          {
              size : "W34L32",
              colour : "Light Wash",
              price : 30.0,
              discount : 50.0,
              quantity : 0.0
          },
          {
              size : "W34L32",
              colour : "Medium Wash",
              price : 30.0,
              quantity : 2.0
          },
          {
              size : "W34L32",
              colour : "Dark Wash",
              price : 30.0,
              quantity : 20.0
          },
          {
              size : "W36L32",
              colour : "Light Wash",
              price : 30.0,
              quantity : 7.0
          },
          {
              size : "W36L32",
              colour : "Medium Wash",
              price : 30.0,
              quantity : 0.0
          },
          {
              size : "W36L32",
              colour : "Dark Wash",
              price : 30.0,
              discount : 20.0,
              quantity : 12.0
          },
          {
              size : "W38L34",
              colour : "Light Wash",
              price : 30.0,
              discount : 30.0,
              quantity : 11.0
          },
          {
              size : "W38L34",
              colour : "Medium Wash",
              price : 30.0,
              discount : 10.0,
              quantity : 5.0
          },
          {
              size : "W38L34",
              colour : "Dark Wash",
              price : 30.0,
              discount : 25.0,
              quantity : 2.0
          },
          {
              size : "W40L34",
              colour : "Light Wash",
              price : 30.0,
              quantity : 0.0
          },
          {
              size : "W40L34",
              colour : "Medium Wash",
              price : 30.0,
              discount : 50.0,
              quantity : 23.0
          },
          {
              size : "W40L34",
              colour : "Dark Wash",
              price : 30.0,
              quantity : 0.0
          }
      ],
      showPrice: 30.00
    },
    {
      key: 3,
      description : "Pellentesque venenatis tellus vehicula felis dictum, luctus semper nisi mollis. Nunc nibh diam, porta id ultricies vel, hendrerit non felis.",
      title : "Mom fit cord pant",
      categories : [
          "clothing",
          "womens",
          "bottoms",
          "trousers"
      ],
      stock : [
          {
              size : "W26L30",
              colour : "Pink",
              price : 45.0,
              quantity : 7.0
          },
          {
              size : "W26L30",
              colour : "Brown",
              price : 45.0,
              discount : 20.0,
              quantity : 15.0
          },
          {
              size : "W26L30",
              colour : "Yellow",
              price : 45.0,
              quantity : 19.0
          },
          {
              size : "W28L30",
              colour : "Pink",
              price : 45.0,
              quantity : 4.0
          },
          {
              size : "W28L30",
              colour : "Brown",
              price : 45.0,
              discount : 20.0,
              quantity : 5.0
          },
          {
              size : "W28L30",
              colour : "Yellow",
              price : 45.0,
              quantity : 14.0
          },
          {
              size : "W30L32",
              colour : "Pink",
              price : 45.0,
              quantity : 3.0
          },
          {
              size : "W30L32",
              colour : "Brown",
              price : 45.0,
              quantity : 19.0
          },
          {
              size : "W30L32",
              colour : "Yellow",
              price : 45.0,
              discount : 15.0,
              quantity : 0.0
          },
          {
              size : "W32L32",
              colour : "Pink",
              price : 45.0,
              discount : 15.0,
              quantity : 7.0
          },
          {
              size : "W32L32",
              colour : "Brown",
              price : 45.0,
              quantity : 0.0
          },
          {
              size : "W32L32",
              colour : "Yellow",
              price : 45.0,
              quantity : 22.0
          },
          {
              size : "W34L32",
              colour : "Pink",
              price : 45.0,
              discount : 50.0,
              quantity : 0.0
          },
          {
              size : "W34L32",
              colour : "Brown",
              price : 45.0,
              quantity : 2.0
          },
          {
              size : "W34L32",
              colour : "Yellow",
              price : 45.0,
              quantity : 20.0
          },
          {
              size : "W36L32",
              colour : "Pink",
              price : 45.0,
              quantity : 8.0
          },
          {
              size : "W36L32",
              colour : "Brown",
              price : 45.0,
              quantity : 0.0
          },
          {
              size : "W36L32",
              colour : "Yellow",
              price : 45.0,
              discount : 20.0,
              quantity : 9.0
          },
          {
              size : "W38L34",
              colour : "Pink",
              price : 45.0,
              discount : 40.0,
              quantity : 11.0
          },
          {
              size : "W38L34",
              colour : "Brown",
              price : 45.0,
              discount : 10.0,
              quantity : 5.0
          },
          {
              size : "W38L34",
              colour : "Yellow",
              price : 45.0,
              discount : 20.0,
              quantity : 12.0
          },
          {
              size : "W40L34",
              colour : "Pink",
              price : 45.0,
              quantity : 0.0
          },
          {
              size : "W40L34",
              colour : "Brown",
              price : 45.0,
              discount : 50.0,
              quantity : 0.0
          },
          {
              size : "W40L34",
              colour : "Yellow",
              price : 45.0,
              quantity : 14.0
          }
      ],
      showPrice: 45.00
    }
  ];

  const { id } = useParams();

  const product = products.find(obj => {
    return obj.key == id;
  });

  let sizeArr = [];
  let colourArr = [];

  product.stock.map((stock) => {
    if (!sizeArr.includes(stock.size)) {
        sizeArr.push(stock.size)
    }
  });

  product.stock.map((stock) => {
    if (!colourArr.includes(stock.colour)) {
        colourArr.push(stock.colour)
    }
  });

  return ( 
    <div className="product-page">
      {product && (
        <div className="product-details">
          <div className="preview-images">
            <img src="../../public/product-placeholder.png"></img>
            <h1>{product.title}</h1>
            <p>£{product.showPrice}</p>

            <button className="add-btn">Add to Basket</button>
          </div>
          <div className="product-info">
            <p>{product.description}</p>

            <div className="product-options">
                <label>Size:</label>
                {sizeArr.map((size) => (
                    <button>{size}</button>
                ))}
            </div>
            
            <div className="product-options">
                <label>Colour:</label>
                {colourArr.map((colour) => (
                    <button>{colour}</button>
                ))}
            </div>
          </div>
        </div>
      )}
      
    </div>
   );
}
 
export default ProductDetails;