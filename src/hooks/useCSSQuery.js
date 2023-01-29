import { useRef, useState } from "react";
import QUESTIONS from "../questions";

export default function useCSSQuery() {
    const [queIdx, setqueIdx] = useState(0)
    const [query, setQuery] = useState('')
    const parentContainer = useRef(null)

    const qnA = QUESTIONS[queIdx]

    const cleanup = () => {
        [].forEach.call(parentContainer.current.querySelectorAll(".highlight, .correct"), (element) => {
            element.classList.remove("highlight");
            element.classList.remove("correct");
        });
    }

    const onChange = e => {
        const val = e.target.value

        setQuery(val);
        if(val === qnA.answer) {
            if (queIdx + 1 === QUESTIONS.length) return

                setTimeout(() => {
                    setqueIdx(queIdx + 1)
                    setQuery('')
                    setTimeout(() => cleanup(), 100)
                }, 1000)
        }

        if (!parentContainer.current) return;
        // const $submitted = parentContainer.current.querySelectorAll(val)
        // const $answer = parentContainer.current.querySelectorAll(qnA.answer)
        // console.log(qnA.answer, $answer)
        // cleanup()

        // try {
        //     [].forEach.call($submitted, (element) => {
        //         element.classList.add("highlight");
        //     });

        //     [].forEach.call($answer, (element) => {
        //         element.classList.add("correct");
        //     });

        //     // const incorrectAnswer = parentContainer.current.querySelectorAll(".highlight:not(.correct)").length > 0


        //     // if ($submitted.length && !incorrectAnswer) {
        //     //     if (queIdx + 1 === QUESTIONS.length) return

        //     //     setTimeout(() => {
        //     //         setqueIdx(queIdx + 1)
        //     //         setQuery('')
        //     //         setTimeout(() => cleanup(), 100)
        //     //     }, 1000)
        //     // } 
        // } catch (error) {
        //     console.log(error)            
        // }
    }

    return {
        query,
        onChange,
        parentContainer,

        question: qnA.question,
        queIdx,
    }
}