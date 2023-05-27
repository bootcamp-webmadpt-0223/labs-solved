const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label htmlFor={color}>{color.toUpperCase()}</label>
      <input
        type="number"
        id={color}
        value={value}
        min={0}
        max={255}
        onChange={(e) => onChange(color, parseInt(e.target.value))}
      />
    </div>
  )
}

export default SingleColorPicker
