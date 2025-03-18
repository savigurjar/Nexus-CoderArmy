export default function Header() {
  return (
    <div className="header">
      <img className="images"
        src="https://images-static.nykaa.com/fashion-images/pub/media/logo-full.svg"
        height="100px"
        width="140px"
      />

      <div className="option">
        <button className="btn">Women</button>
        <button className="btn">Men</button>
        <button className="btn">Kids</button>
        <button className="btn">Home</button>
        <button className="btn">All Brand</button>
        <button className="btn">More</button>
      </div>

      <input className="search" type="text" placeholder= "&#128269; Search for styles,brands & more"></input>

      <div className="profile">
        <button className="pro">Acount</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Cart</button>
      </div>
    </div>
  );
}
