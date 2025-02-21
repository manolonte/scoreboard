import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [teamAcount, setTeamACount] = useState(0)
  const [teamBcount, setTeamBCount] = useState(0)

  return (
    <>
      <div className="scoreboard">
        <div className="teamA">
          <div className="leftButtonPanel">
            <button className="buttonPlus1" onClick={() => setTeamACount((teamAcount) => teamAcount + 1)}>
              +1
            </button>
            <button className="buttonPlus2" onClick={() => setTeamACount((teamAcount) => teamAcount + 2)}>
              +2
            </button>
            <button className="buttonPlus3" onClick={() => setTeamACount((teamAcount) => teamAcount + 3)}>
              +3
            </button>
            <button className="buttonMinus1" onClick={() => setTeamACount((teamAcount) => teamAcount - 1)}>
              -1
            </button>
            <button className="buttonMinus2" onClick={() => setTeamACount((teamAcount) => teamAcount - 2)}>
              -2
            </button>
            <button className="buttonMinus3" onClick={() => setTeamACount((teamAcount) => teamAcount - 3)}>
              -3
            </button>
            <button className="button0" onClick={() => setTeamACount((teamAcount) => 0)}>
              0
            </button>        
          </div>
          <div className="teamScore">
            <div className="teamName">Tomares</div>
            <div className="leftScore">
              {teamAcount}
            </div>
          </div>
        </div>
        <div className="teamB">
          <div className="teamScore">
            <div className="teamName">Otro equipo</div>
            <div className="rightScore">
              {teamBcount}
            </div>
          </div>
          <div className="rightButtonPanel">
            <button className="buttonPlus1" onClick={() => setTeamBCount((teamBcount) => teamBcount + 1)}>
              +1
            </button>
            <button className="buttonPlus2" onClick={() => setTeamBCount((teamBcount) => teamBcount + 2)}>
              +2
            </button>
            <button className="buttonPlus3" onClick={() => setTeamBCount((teamBcount) => teamBcount + 3)}>
              +3
            </button>
            <button className="buttonMinus1" onClick={() => setTeamBCount((teamBcount) => teamBcount - 1)}>
              -1
            </button>
            <button className="buttonMinus2" onClick={() => setTeamBCount((teamBcount) => teamBcount - 2)}>
              -2
            </button>
            <button className="buttonMinus3" onClick={() => setTeamBCount((teamBcount) => teamBcount - 3)}>
              -3
            </button>
            <button className="button0" onClick={() => setTeamBCount((teamBcount) => 0)}>
              0
            </button>                
          </div>
        </div>
      </div>
    </>
  )
}

export default App
