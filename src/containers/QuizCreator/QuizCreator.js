import classes from './QuizCreator.module.css'
import Input from '../../components/UI/input/input'
import {useState,useEffect} from 'react'
import {createQuiz} from '../../store/actions/createQuiz'
import { useSelector,useDispatch} from "react-redux"
import {createQuestion} from '../../store/actions/createQuiz'



function QuizCreator(){
    let quiz = useSelector(state => state.createQuestionReducer.quiz) 
    const dispatch = useDispatch()

    let [question,setQuestion] = useState({
        question:'',
        variants:{
            variant1:'',
            variant2:'',
            variant3:'',
            variant4:'',
        },
        rightVariant:'1'
        
    })

    let [touched,setTouched] = useState({
        touchedQuestion:false,
        touchedVariant1:false,
        touchedVariant2:false,
        touchedVariant3:false,
        touchedVariant4:false,
    })

    let [validateQuestion,setValidateQuestion] = useState({
        validateQuestion:false,
        validateVariant1:false,
        validateVariant2:false,
        validateVariant3:false,
        validateVariant4:false,
    })

    let [clsAdd, setClsAdd] =useState([classes.add,classes.notValid])
    let [clsCreate,setClsCreate] = useState([classes.create,classes.notValid])

    function validateAll(){
        Object.keys(validateQuestion).forEach(el=>{
            if (validateQuestion[el]===false){
                return false
            }
        })
        return true
    }

    useEffect(()=>{
        if(validateAll()){
            setClsAdd([classes.add])
        }
        else{
            setClsAdd([classes.add, classes.notValid])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[validateQuestion])

    useEffect(()=>{
        if(quiz.length>0){
            setClsCreate([classes.create])
        }
    },[quiz])

    function makeDefaultState(){
        setQuestion({
            question:'',
            variants:{
                variant1:'',
                variant2:'',
                variant3:'',
                variant4:'',
            },
            rightVariant:'1'
        })
        setTouched({
            touchedQuestion:false,
            touchedVariant1:false,
            touchedVariant2:false,
            touchedVariant3:false,
            touchedVariant4:false,
        })
        setValidateQuestion({
            validateQuestion:false,
            validateVariant1:false,
            validateVariant2:false,
            validateVariant3:false,
            validateVariant4:false,
        })
    }


    function selectChangeHadler(e){
        setQuestion({...question,rightVariant: e.target.value})
    }
    function questionChangeHadler(e){
        const value  = e.target.value
        setQuestion({...question,question:value})
        setTouched({...touched,touchedQuestion:true})
        if(value.length>0){
            setValidateQuestion({...validateQuestion,validateQuestion:true})
        }
        else{
            setValidateQuestion({...validateQuestion,validateQuestion:false})
        }
    }
    function variantsChangeHadler(e,label){
        switch(label){
            case '?????????????? 1':
                setQuestion({...question,variants:{...question.variants, variant1:e.target.value}})
                setTouched({...touched,touchedVariant1:true})
                if(e.target.value.length>0){
                    setValidateQuestion({...validateQuestion,validateVariant1:true})
                }
                else{
                    setValidateQuestion({...validateQuestion,validateVariant1:false})
                }
                break;
            case '?????????????? 2':
                setQuestion({...question,variants:{...question.variants, variant2:e.target.value}})
                setTouched({...touched,touchedVariant2:true})
                if(e.target.value.length>0){
                    setValidateQuestion({...validateQuestion,validateVariant2:true})
                }
                else{
                    setValidateQuestion({...validateQuestion,validateVariant2:false})
                }
                break;
            case '?????????????? 3':
                setQuestion({...question,variants:{...question.variants, variant3:e.target.value}})
                setTouched({...touched,touchedVariant3:true})
                 if(e.target.value.length>0){
                    setValidateQuestion({...validateQuestion,validateVariant3:true})
                }
                else{
                    setValidateQuestion({...validateQuestion,validateVariant2:false})
                }
                break;
            case '?????????????? 4':
                setQuestion({...question,variants:{...question.variants, variant4:e.target.value}})
                setTouched({...touched,touchedVariant4:true})
                if(e.target.value.length>0){
                    setValidateQuestion({...validateQuestion,validateVariant4:true})
                }
                else{
                    setValidateQuestion({...validateQuestion,validateVariant4:false})
                }
                break;
            default:
                throw new Error('?????????????????????????? ???????????? 4 ???????? ?????? ??????????????????')
        }
    }

    function addChangeHadler(){
        let isValidate = validateAll()
        if(isValidate){
            dispatch(createQuestion(
                {   
                id:quiz.length+1,
                question:question,
                answer:[
                    {text: question.variants.varian1,id:1},
                    {text: question.variants.varian2,id:2},
                    {text: question.variants.varian3,id:3},
                    {text: question.variants.varian4,id:4},
                ],
                rightAnswerId:question.rightVariant
                }
            ))
            
            makeDefaultState()
        }
    }
    async function createQuizHandler(){
            dispatch(createQuiz(quiz))
            makeDefaultState()
            alert(' ???????? ????????????')
    }

    return (
        <div className={classes.QuizCreator}>
            <div>
                <h1>???????????????? ??????????</h1>
                <div className={classes.testCreate}>
                    <div className={classes.question}>
                        <Input label = '?????????????? ????????????' type = 'text' value = {question.question} onChange = {questionChangeHadler} touched = {touched.touchedQuestion} errorMessage = '???????? ???? ?????????? ???????? ????????????' valid = {validateQuestion.validateQuestion}/>
                    </div>
                    <div className={classes.variants}>
                        <Input value = {question.variants.variant1} label = '?????????????? 1' type = 'text' onChange = {variantsChangeHadler} touched = {touched.touchedVariant1} errorMessage = '???????? ???? ?????????? ???????? ????????????' valid = {validateQuestion.validateVariant1}/>
                        <Input value = {question.variants.variant2} label = '?????????????? 2' type = 'text' onChange = {variantsChangeHadler} touched = {touched.touchedVariant2} errorMessage = '???????? ???? ?????????? ???????? ????????????' valid = {validateQuestion.validateVariant2}/>
                        <Input value = {question.variants.variant3} label = '?????????????? 3' type = 'text' onChange = {variantsChangeHadler} touched = {touched.touchedVariant3} errorMessage = '???????? ???? ?????????? ???????? ????????????' valid = {validateQuestion.validateVariant3}/>
                        <Input value = {question.variants.variant4} label = '?????????????? 4' type = 'text' onChange = {variantsChangeHadler} touched = {touched.touchedVariant4} errorMessage = '???????? ???? ?????????? ???????? ????????????' valid = {validateQuestion.validateVariant4}/>
                        <label>???????????????? ???????????????????? ??????????</label>
                        <select onClick={selectChangeHadler} >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                        <div className={classes.btn}>
                            <button className={clsAdd.join(' ')} onClick = {addChangeHadler}>????????????????</button>
                            <button className={clsCreate.join(' ')} onClick={createQuizHandler}>?????????????? ????????</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuizCreator