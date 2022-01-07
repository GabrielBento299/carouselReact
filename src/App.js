 import './App.css';
 import {useEffect, useState, useRef} from 'react';

function App() {

  const [data, setData] = useState([]);
  const carrosel = useRef(null);
 
   useEffect(() => {
      fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData)
   }, []);

   const handleLeftClick = (e) => {
      e.preventDefault();
      console.log(carrosel.current.offsetWidth);
      carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
   }

   const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carrosel.current.offsetWidth);
    carrosel.current.scrollLeft += carrosel.current.offsetWidth;
   }
 
   if (!data || !data.length) return null;

  return (
    <div className="container">

      <div className="logo">
         <img src="/static/assets/super-shoes.png" alt="Super Shoes Logo" />
      </div>

      <div className="carrosel" ref={carrosel}>

        {data.map((item) => { 
          const {id, name, price, oldPrice, image} = item;
          return( <div className="item" key={id} > 
          <div className="image">
            <img src={image} alt={name} />
          </div>
          
          <div className="info">
             <span className="name">{name}</span>
             <span className="oldPrice"> {oldPrice} </span>
             <span className="price"> {price} </span>
          </div>
      </div>
          );
      })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick} ><img src="/static/assets/right_chevron_icon.png" alt="Scroll Left" /> </button>

        <button onClick={handleRightClick}><img src="/static/assets/right_chevron_icon.png" alt="Scroll Right" /> </button>
       
      </div>
      </div>

  );
}
 
export default App;
