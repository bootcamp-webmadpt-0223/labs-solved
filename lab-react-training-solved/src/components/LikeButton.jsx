import { useState } from 'react'

const LikeButton = () => {
  const [numLikes, setNumLikes] = useState(0)
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
  const randPos = Math.floor(Math.random() * colors.length)

  const divStyle = {
    color: 'black',
    backgroundColor: `${colors[randPos]}`,
  }

  return (
    <button
      className="LikeButton"
      style={divStyle}
      onClick={() => setNumLikes((likes) => (likes += 1))}
    >
      {numLikes} Likes
    </button>
  )
}

const LikeButtonsContainer = () => {
  return (
    <>
      <LikeButton />
      <LikeButton />
    </>
  )
}

export default LikeButtonsContainer
