import Layout from "./hoc/layout/Layout"
import Quiz from "./containers/quiz/quiz"
import {Routes,Route} from 'react-router-dom'
import Auth from "./containers/Auth/Auth"
import QuizCreator from  "./containers/QuizCreator/QuizCreator"
import QuizList from "./containers/QuizList/QuizList"
import {useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import  LogoutRoute from "./containers/Logout/logout"



function App(){
  const token = useSelector(state=>state.authReducer.token)
  let [routes,setRoutes] = useState([])
  useEffect(()=>{
    if(token===''||token===null){
      setRoutes([
        <Route  path= '/quiz/:id' element = {<Quiz/>} key = {2} />,
        <Route  path= '/auth'element = {<Auth/>} key = {3}/>,
        <Route  path= '/'element = {<QuizList/>} key = {1}/>,

      ])
    }
    else{
      setRoutes([
        <Route  path= '/quiz/:id' element = {<Quiz/>} key = {2}/>,
        <Route  path= '/quiz-creator'element = {<QuizCreator/>} key = {3}/>,
        <Route  path= '/logout'element = {<LogoutRoute/>} key = {4}/>,
        <Route  path= '/'element = {<QuizList/>} key = {1} exact/>,
      ])
    }
  },[token])

  return(
    <Layout>
        <Routes>
          <>
            {routes}
          </>
        </Routes>
    </Layout>
  )
}

export default App;
