import classes from './QuizCreator.module.css'
import Input from '../../components/UI/input/input'
import {useState,useEffect} from 'react'



function QuizCreator(){
    let [quiz,setQuiz] = useState([])

    let [question,setQuestion] = useState('')
    let [varian1,setVariant1] = useState('')
    let [varian2,setVariant2] = useState('')
    let [varian3,setVariant3] = useState('')
    let [varian4,setVariant4] = useState('')
    let [rightVariant,setRightVariant] = useState('1')

    let [touchedQuestion, setTouchedQuestion] = useState(false)
    let [touchedVariant1, setTouchedVariant1] = useState(false)
    let [touchedVariant2, setTouchedVariant2] = useState(false)
    let [touchedVariant3, setTouchedVariant3] = useState(false)
    let [touchedVariant4, setTouchedVariant4] = useState(false)

    let [validateQuestion, setValidateQuestion] = useState(false)
    let [validateVariant1, setValidateVariant1] = useState(false)
    let [validateVariant2, setValidateVariant2] = useState(false)
    let [validateVariant3, setValidateVariant3] = useState(false)
    let [validateVariant4, setValidateVariant4] = useState(false)

    let [clsAdd, setClsAdd] =useState([classes.add,classes.notValid])
    let [clsCreate,setClsCreate] = useState([classes.create,classes.notValid])

    function validateAll(){
        if(validateQuestion === true&&validateVariant1===true&&validateVariant2===true&&validateVariant3===true&&validateVariant4===true){
            return true
        }
        return false
    }

    useEffect(()=>{
        if(validateAll()){
            setClsAdd([classes.add])
        }
        else{
            setClsAdd([classes.add, classes.notValid])
        }
    },[validateQuestion,validateVariant1,validateVariant2,validateVariant3,validateVariant4])

    useEffect(()=>{
        if(quiz.length>0){
            setClsCreate([classes.create])
        }
    },[quiz])

    function makeDefaultState(){
        setQuestion('')
        setVariant1('')
        setVariant2('')
        setVariant3('')
        setVariant4('')
        setRightVariant('1')
        setTouchedQuestion('')
        setTouchedVariant1('')
        setTouchedVariant2('')
        setTouchedVariant3('')
        setTouchedVariant4('')
        setValidateQuestion(false)
        setValidateVariant1(false)
        setValidateVariant2(false)
        setValidateVariant3(false)
        setValidateVariant4(false)
    }


    function selectChangeHadler(e){
        setRightVariant(e.target.value)
    }
    function questionChangeHadler(e){
        const value  = e.target.value
        setQuestion(value)
        setTouchedQuestion(true)
        if(value.length>0){
            setValidateQuestion(true)
        }
        else{
            setValidateQuestion(false)
        }
    }
    function variantsChangeHadler(e,label){
        switch(label){
            case 'Вариант 1':
                setVariant1(e.target.value)
                setTouchedVariant1(true)
                if(e.target.value.length>0){
                    setValidateVariant1(true)
                }
                else{
                    setValidateVariant1(false)
                }
                break;
            case 'Вариант 2':
                setVariant2(e.target.value)
                setTouchedVariant2(true)
                if(e.target.value.length>0){
                    setValidateVariant2(true)
                }
                else{
                    setValidateVariant2(false)
                }
                break;
            case 'Вариант 3':
                 setVariant3(e.target.value)
                 setTouchedVariant3(true)
                 if(e.target.value.length>0){
                    setValidateVariant3(true)
                }
                else{
                    setValidateVariant3(false)
                }
                break;
            case 'Вариант 4':
                setVariant4(e.target.value)
                setTouchedVariant4(true)
                if(e.target.value.length>0){
                    setValidateVariant4(true)
                }
                else{
                    setValidateVariant4(false)
                }
                break;
            default:
                throw new Error('Предусмотрено только 4 поля для вариантов')
        }
    }

    function addChangeHadler(){
        let isValidate = validateAll()
        if(isValidate){
            setQuiz([...quiz,{
                id:quiz.length+1,
                question:question,
                answer:[
                    {text: varian1,id:1},
                    {text: varian2,id:2},
                    {text: varian3,id:3},
                    {text: varian4,id:4},
                ],
                rightAnswerId:rightVariant
            }])
            makeDefaultState()
        }
    }
    function createQuizHandler(){
        console.log(quiz)
    }

    return (
        <div className={classes.QuizCreator}>
            <div>
                <h1>Создание теста</h1>
                <div className={classes.testCreate}>
                    <div className={classes.question}>
                        <Input label = 'Введите вопрос' type = 'text' value = {question} onChange = {questionChangeHadler} touched = {touchedQuestion} errorMessage = 'Поле не может быть пустым' valid = {validateQuestion}/>
                    </div>
                    <div className={classes.variants}>
                        <Input value = {varian1} label = 'Вариант 1' type = 'text' onChange = {variantsChangeHadler} touched = {touchedVariant1} errorMessage = 'Поле не может быть пустым' valid = {validateVariant1}/>
                        <Input value = {varian2} label = 'Вариант 2' type = 'text' onChange = {variantsChangeHadler} touched = {touchedVariant2} errorMessage = 'Поле не может быть пустым' valid = {validateVariant2}/>
                        <Input value = {varian3} label = 'Вариант 3' type = 'text' onChange = {variantsChangeHadler} touched = {touchedVariant3} errorMessage = 'Поле не может быть пустым' valid = {validateVariant3}/>
                        <Input value = {varian4} label = 'Вариант 4' type = 'text' onChange = {variantsChangeHadler} touched = {touchedVariant4} errorMessage = 'Поле не может быть пустым' valid = {validateVariant4}/>
                        <label>Выберите правильный ответ</label>
                        <select onClick={selectChangeHadler} >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                        <div className={classes.btn}>
                            <button className={clsAdd.join(' ')} onClick = {addChangeHadler}>Добавить</button>
                            <button className={clsCreate.join(' ')} onClick={createQuizHandler}>Создать тест</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuizCreator