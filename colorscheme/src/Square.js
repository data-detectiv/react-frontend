const Square = ({colorValue="Empty color value"}) => {
  return (
    <section
    className="square"
        style={{backgroundColor:colorValue}}
    >
        <p>{colorValue ? colorValue : "Empty value"}</p>
    </section>
  )
}

export default Square;