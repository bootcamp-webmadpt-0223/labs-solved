const NumbersTable = ({ limit }) => {
  return (
    <div className="NumbersTable">
      {Array.from({ length: limit }, (_, i) => i + 1).map((num) => (
        <p
          key={num}
          style={{ backgroundColor: num % 2 === 0 ? 'red' : 'transparent' }}
          className="number"
        >
          {num}
        </p>
      ))}
    </div>
  )
}

export default NumbersTable
