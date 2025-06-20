const SearchColor = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add color</label>
        <input 
            autoFocus
            type="text"
            placeholder="Add color"
            value={colorValue} 
            onChange={(e) => setColorValue(e.target.value)}
        />
    </form>
  )
}

export default SearchColor