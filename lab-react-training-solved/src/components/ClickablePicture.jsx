import { useState } from 'react'

const ClickablePicture = ({ img, imgGlasses }) => {
  const [firstImage, setFirstImage] = useState(true)

  const toggleImage = () => setFirstImage(!firstImage)

  const cursorPointer = {
    cursor: 'pointer',
  }

  return (
    <section style={cursorPointer} onClick={toggleImage}>
      {firstImage ? (
        <img src={img} alt="no glasses" />
      ) : (
        <img src={imgGlasses} alt="glasses" />
      )}
    </section>
  )
}

export default ClickablePicture
