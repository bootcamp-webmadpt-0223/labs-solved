import { useState } from 'react'

const Carousel = ({ images }) => {
  const [index, setImgIndex] = useState(0)

  const handlePrev = () => {
    setImgIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    )
  }

  const handleNext = () => {
    setImgIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    )
  }

  return (
    <>
      <br></br>
      <img style={{ width: '200px' }} src={images[index]} alt="random" />

      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default Carousel
