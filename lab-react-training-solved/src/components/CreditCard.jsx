import visa from '../assets/images/visa.png'
import master from '../assets/images/master-card.svg'

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props

  const divStyle = {
    backgroundColor: bgColor,
    color: color,
  }

  return (
    <div className="CreditCard">
      <div style={divStyle}>
        <img src={type === 'Visa' ? visa : master} alt="credit card" />
        <p>{number}</p>
        <div className="date">
          <p>
            Expires {expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  )
}

export default CreditCard
