import { useState, useEffect } from "react";

const Carousel = ({img1, img2, title}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageScroll = () => setCurrentIndex(currentIndex === 1 ? 0 : currentIndex + 1);

  useEffect(() => {
    const interval = setInterval(() => imageScroll() , 5000);

    return () => clearInterval(interval);
  })

  return ( 
    <div className="preview-images">
      <div className="preview-container" style={{transform: `translate(-${currentIndex * 100}%)`}}>
        <img src={img1} id="product-img-1" alt={title}></img>
      </div>
      <div className="preview-container" style={{transform: `translate(-${currentIndex * 100}%)`}}>
        <img src={img2} id="product-img-2" alt={title}></img>
      </div>
    </div>
   );
}
 
export default Carousel;