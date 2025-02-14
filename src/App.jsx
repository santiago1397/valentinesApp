import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const questions = ["¿Segura?, ¿No quieres ser mi valentin?", "¿Y ahora?", "¿Ultima oportunidad?"]
  const questionGifs = ["gojo confused.webp", "chinji-confused.gif", "bakugo-confused.gif"]
  const happyGif = "gojo-happy.gif"

  const [isFirstNo, setIsFirstNo] = useState(true)
  const [index, setIndex] = useState(0)

  const [isYes, setIsYes] = useState(false)

  const [currentGif, setCurrentGif] = useState("michi.gif")
  const [noesWidth, setNoesWidth] = useState(120)
  const [noesHeigth, setNoesHeigth] = useState(60)
  const [text, setText] = useState("Ori Chipi. ¿Quires ser mi Valentín?")

  const handleNoes = () => {

    if (isFirstNo) {
      setText(questions[index])
      setCurrentGif(questionGifs[index])
      setIsFirstNo(false)
    } else if (index == 2) {

    } else {
      setText(questions[index + 1])
      setCurrentGif(questionGifs[index + 1])
      setIndex((prev) => prev + 1)
    }




    setNoesWidth((prev) => prev + 70)
    setNoesHeigth((prev) => prev + 50)
  }

  const handleYes = () => {
    setIsYes(true)
  }

  return (
    <div className="valentins-background">
      <div className="valentins-wrapper">
        {
          isYes ?
            <>
              <div className="image-wrapper">
                <img className="image-class" src="gojo-happy.gif" alt="" />
              </div>
              <div className='center-text'>
                Lets goooo!
              </div>
            </>
            : <>
              <div className="image-wrapper">
                <img className="image-class" src={currentGif} alt="" />
              </div>

              <div className='center-text'>
                {text}
              </div>

              <div className="buttons-wrapper">
                <button style={{
                  width: `${noesWidth}px`,
                  height: `${noesHeigth}px`,
                  fontSize: "30px",
                  fontWeight: 'bold',
                  backgroundColor: '#90EE90',
                  cursor: "pointer",
                }}
                  onClick={handleYes}
                >
                  Si
                </button>
                <button style={{
                  width: `120px`,
                  height: `60px`,
                  fontSize: "30px",
                  fontWeight: 'bold',
                  backgroundColor: '#FF69B4',
                  cursor: "pointer",
                }}
                  onClick={handleNoes}
                >
                  No
                </button>
              </div>
            </>
        }


      </div>
    </div>
  )
}

export default App
