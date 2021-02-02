function Buttons() {

  function play() {
    alert("Now playing!!");
  }

  function pause() {
    alert("Hold Up!");
  }
function vote() {
  alert("Vote count increased")
}

  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={vote}>Vote</button>
    </div>
  )
}


export default Buttons
