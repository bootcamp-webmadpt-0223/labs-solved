import Rating from './Rating'

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <article className="row">
      <div className="col-4">
        <img src={img} alt={name} className="driverImg" />
      </div>
      <div className="col-8">
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <p>
          {car.model} {car.licensePlate}
        </p>
      </div>
    </article>
  )
}

export default DriverCard
