const Card = () => {
  return (
    <div className="card">
      <h2>Interactive React Card</h2>
      <p>Modular JSX component composition with reactive event handling and responsive card styling.</p>
      <button className="card-btn" onClick={() => alert('Card Details Expanded!')}>Explore Details &rarr;</button>
    </div>
  );
};

export default Card;