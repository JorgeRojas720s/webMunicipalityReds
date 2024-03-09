export default function Card({name, imageUrl}) {
  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
      <div className="card">
        <img src={imageUrl} class="card-img-top" alt="faucet" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://ejemplo.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}