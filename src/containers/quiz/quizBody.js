import ActiveQuiz from "../../components/activeQuiz/activeQuiz";
import Finished from "../../components/finished/finished"
import {useSelector} from 'react-redux'


function QuizBody (){
    const finished = useSelector(state => state.quizListReducer.finished)
    return(
        <div>
            {!finished? < ActiveQuiz/> : < Finished/> }
        </div>
    )
}

export default QuizBody