// /************************************
// 1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

// 2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
// ************************************/
// import React from 'react';
// import { Home_Display_Cards } from './Home_Display_Cards';
// // import { DisplayCard } from '../StyledBasicComponents';
// import './Home_Slider.scss';
// const slideWidth = 30;

// const _items = [
    
// ];

// const length = _items.length;
// _items.push(..._items);

// const sleep = (ms = 0) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const createItem = (position, idx) => {
//     const item = {
//         styles: {
//             transform: `translateX(${position * slideWidth}rem)`,
//         },
//         player: _items[idx].player,
//     };

//     switch (position) {
//         case length - 1:
//         case length + 1:
//             item.styles = {...item.styles, filter: 'grayscale(1)'};
//             break;
//         case length:
//             break;
//         default:
//             item.styles = {...item.styles, opacity: 0};
//             break;
//     }

//     return item;
// };

// const CarouselSlideItem = ({pos, idx, activeIdx}) => {
//     const item = createItem(pos, idx, activeIdx);

//     return (
//         <li className="carousel__slide-item" style={item.styles}>
//             {/* <div className="carousel__slide-item-img-link">
//                 <img src={item.player.image} alt={item.player.title} />
//             </div> */}
//             {/* <DisplayCard/> */}
//             <Home_Display_Cards/>

//             {/* <div className="carousel-slide-item__body">
//                 <h4>{item.player.title}</h4>
//                 <p>{item.player.desc}</p>
//             </div> */}
//         </li>
//     );
// };

// const keys = Array.from(Array(_items.length).keys());

// const Carousel = () => {
//     const [items, setItems] = React.useState(keys);
//     const [isTicking, setIsTicking] = React.useState(false);
//     const [activeIdx, setActiveIdx] = React.useState(0);
//     const bigLength = items.length;

//     const prevClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map((_, i) => prev[(i + jump) % bigLength]);
//             });
//         }
//     };

//     const nextClick = (jump = 1) => {
//         if (!isTicking) {
//             setIsTicking(true);
//             setItems((prev) => {
//                 return prev.map(
//                     (_, i) => prev[(i - jump + bigLength) % bigLength],
//                 );
//             });
//         }
//     };

//     const handleDotClick = (idx) => {
//         if (idx < activeIdx) prevClick(activeIdx - idx);
//         if (idx > activeIdx) nextClick(idx - activeIdx);
//     };

//     React.useEffect(() => {
//         if (isTicking) sleep(300).then(() => setIsTicking(false));
//     }, [isTicking]);

//     React.useEffect(() => {
//         setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
//     }, [items]);

//     return (
//         <div className="carousel__wrap">
//             <div className="carousel__inner">
//                 <button
//                     className="carousel__btn carousel__btn--prev"
//                     onClick={() => prevClick()}>
//                     <i className="carousel__btn-arrow carousel__btn-arrow--left" />
//                 </button>
//                 <div className="carousel__container">
//                     <ul className="carousel__slide-list">
//                         {items.map((pos, i) => (
//                             <CarouselSlideItem
//                                 key={i}
//                                 idx={i}
//                                 pos={pos}
//                                 activeIdx={activeIdx}
//                             />
//                         ))}
//                     </ul>
//                 </div>
//                 <button
//                     className="carousel__btn carousel__btn--next"
//                     onClick={() => nextClick()}>
//                     <i className="carousel__btn-arrow carousel__btn-arrow--right" />
//                 </button>
//                 <div className="carousel__dots">
//                     {items.slice(0, length).map((pos, i) => (
//                         <button
//                             key={i}
//                             onClick={() => handleDotClick(i)}
//                             className={i === activeIdx ? 'dot active' : 'dot'}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export {Carousel}
// // ReactDOM.render(<Carousel />, document.getElementById('root'));
