import classes from './QuizList.module.css'
import {NavLink} from 'react-router-dom'

function QuizList (){
    function renderQuizList(){
        let quiz = [1,2,3]
        return quiz.map((el,index)=>{
            return (
            <li key = {index}>
                <NavLink to = {`/quiz/${el}`}>
                    Тест {el}
                </NavLink>
            </li>
            )
        })
    }

    return (
        <div className={classes.quizList}>
            <div>
                <h1>Список Тестов</h1>
                <ul>{renderQuizList()}</ul>
            </div>
        </div>
    )
}

export default QuizList