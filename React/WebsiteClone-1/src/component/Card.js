export default function Card({ image, cardnu, name }) {
    return (
      <div>
     
        <button className="card-btn">
          <img className="cardimg" src={image} alt={cardnu}/>
          {/* {name} */}
        </button>
      </div>
    );
  }
  