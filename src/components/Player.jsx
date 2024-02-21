import React, { useState } from 'react'

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleClickChange = () => {
    setIsEditing((editing) => !editing)

    if (isEditing) {
      onChangeName(symbol, playerName)
    } 
  }
  
  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }
 
  let player = <span className="player-name"> {playerName}</span>

  if (isEditing) {
    player = <input type='text' required value={playerName} onChange={handleChange}/>
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickChange}> {isEditing ? 'Save' : 'Edit'} </button>
    </li>
  )
}

export default Player