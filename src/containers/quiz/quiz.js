import classes from "./quiz.module.css"
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";
import { useSelector } from "react-redux"
import Finished from "../../components/finished/finished"

function Quiz() {
    const finished = useSelector(state => state.finished)
    return (
        <div className = { classes.quiz } >
            <div className = { classes.quizWrapper }>
                <h1 > Ответьте на следующие вопросы</h1> 
                {!finished ? < ActiveQuiz/> : < Finished/> }
            </div>
        </div>
    )
}

export default Quiz;