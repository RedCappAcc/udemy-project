import classes from './QuizList.module.css'
import {NavLink} from 'react-router-dom'
import {useEffect,} from 'react'
import Loader from '../../components/UI/loader/Loader'
import {fetchQuizes} from '../../store/actions/quizList'
import {useSelector,useDispatch} from "react-redux"



function QuizList (){
    const quiz = useSelector(state=> state.quizListReducer.quizes)
    const loading = useSelector(state=> state.quizListReducer.loading)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchQuizes())
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function renderQuizList(){
        return quiz.map((el,index)=>{
            return (
            <li key = {index}>
                <NavLink to = {`/quiz/${el}`}>
                    Тест {index +1}
                </NavLink>
            </li>
            )
        })
    }

    return (
        <div className={classes.quizList}>
            <div>
                <h1>Список Тестов</h1>
                {loading?<Loader/>:<ul>{renderQuizList()}</ul>}
            </div>
        </div>
    )
}

export default QuizList