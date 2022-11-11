import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    thumbnail: "../../public/product-images/hoodie-orange-side.jpg",
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
    type : "hoodie",
    showPrice: 16.99
  },
  {
    id: 2,
    thumbnail: "../../public/product-images/straight-denim-darkWash-front.jpg",
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
    type : "denim jeans",
    showPrice: 30.00
  },
  {
    id: 3,
    thumbnail: "../../public/product-images/cord-pant-brown-front.jpg",
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
    type : "cord pant",
    showPrice: 45.00
  }
]

const Products = () => {
  return ( 
    <div className="browse">
      <div className="divider"></div>

      <div className="products-content">
        <div className="product-nav-btns">
          <button>Sort By</button>
          <button>Filter</button>
        </div>
        
        <div className="products">
          {products.map(({id, thumbnail, title, showPrice}) => (
            <div className="product" key={id}>
              <Link to={`/products/${id}`}>
                <div className="product-img">
                  <img src={thumbnail} alt={title}></img>
                </div>
                <p>{title}</p>
                <p>£{showPrice}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
   );
}
 
export default Products;