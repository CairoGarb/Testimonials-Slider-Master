import { useState } from "react"
import "./App.css"

export function App() {

  const [changeQuote, setChangeQuote] = useState(false)

  const toggleQuote = () => {
    setChangeQuote(!changeQuote)
  }

  return (
    <div className="appContainer">

      {changeQuote ? (
      <div className="womanDiv">

        <div className="imageWoman">
          <img src="./image-tanya.jpg" alt="tanya" />
        </div>

        <div className="textWoman">

          <p className="quoteWoman">I've been interested in coding for a while but never
            taken the jump, until now. I couldn't recommend this course
            enough. I'm now in the job of my dreams and so excited about
            the future.
          </p>

          <div className="infoWoman">
            <p className="nameWoman">Tanya Sinclair</p>
            <p className="jobWoman">UX Engineer</p>
          </div>

        </div>

      </div>
      ) : (

      <div className="manDiv">

        <div className="imageMan">
          <img src="./image-john.jpg" alt="john" />
        </div>

        <div className="textMan">

          <p className="quoteMan">If you want to lay the best foundation possible I'd
            recommend taking this course. The depth the instructors
            go into is incredible. I now feel so confident about
            starting up as a professional developer
          </p>

          <div className="infoMan">
            <p className="nameMan">John Tarkpor</p>
            <div className="jobMan">Junior Front-end Developer</div>
          </div>

        </div>

      </div>
      )}

      <div className="arrows">
        <i className="fa-solid fa-angle-left" onClick={toggleQuote}></i>
        <i className="fa-solid fa-angle-right" onClick={toggleQuote}></i>
      </div>

    </div>
  )
}