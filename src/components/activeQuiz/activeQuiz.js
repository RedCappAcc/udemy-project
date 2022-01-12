import classes from "./activeQuiz.module.css"
import AnswersList from "./AnswersList.js/AnswersList";
import { useSelector } from "react-redux";

function ActiveQuiz (){
    const quiz = useSelector(state => state.quizListReducer.quiz)
    const activeQuestion = useSelector(state=>state.quizListReducer.activeQuestion)
    const answer = quiz[activeQuestion].answer.map((el,index)=><AnswersList key = { index } answer = {el} rightAnswerId = {quiz[activeQuestion].rightAnswerId}/>)
        
    
    return(
         <div className = {classes.activeQuiz}>
            <p className = {classes.quetion}>
                 <span>
                    <strong>{quiz[activeQuestion].id}{"."}</strong>&nbsp;
                    {quiz[activeQuestion].question}
                </span>
                <small>{quiz[activeQuestion].id} из {quiz.length}</small>
            </p>
            <ul>
                {answer}
            </ul>
        </div>
    )
}

export default ActiveQuiz;