import QUESTIONS from "../questions"

export default function Questions({ qNo, onChange, question, query }) {
    if (qNo === QUESTIONS.length) {
        return (
            <h2>Quiz Complete!! Please proceed with Tasks below</h2>
        ) 
    } else {
        return (
            <>
                <p className='App-question'>{qNo}/{QUESTIONS.length - 1}</p>
                <p className='App-question'>Q{qNo}. {question}</p>
                <input className="App-input" onChange={onChange} value={query} />
            </>
        )
    }
}
