const Rating = ({ children }) => {
  const roundedChildren = Math.round(children)
  const stars = {
    0: '☆☆☆☆☆',
    1: '★☆☆☆☆',
    2: '★★☆☆☆',
    3: '★★★☆☆',
    4: '★★★★☆',
    5: '★★★★★',
  }

  const starRating = stars[roundedChildren]

  return (
    <>
      <p>{starRating}</p>
    </>
  )
}

export default Rating
