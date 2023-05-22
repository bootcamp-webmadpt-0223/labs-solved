const Card = ({ imgPath, title, description }) => {
  return (
    <div className='card'>
      <img src={imgPath} alt='illustration' />
      <h4 className='card-title'>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Card
