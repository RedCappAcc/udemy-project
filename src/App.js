import {Component} from 'react'
import Layout from "./hoc/layout/Layout"
import Quiz from "./containers/quiz/quiz"
import { Provider } from 'react-redux'
import store from './redux/store'
import {Routes,Route} from 'react-router-dom'
import Auth from "./containers/Auth/Auth"
import QuizCreator from  "./containers/QuizCreator/QuizCreator"
import QuizList from "./containers/QuizList/QuizList"



class App extends Component{
  render(){
    return(
      <Layout>
        <Provider store={store}>
            <Routes>
              <Route  path= '/auth'element = {<Auth/>}/>
              <Route  path= '/quiz-creator'element = {<QuizCreator/>}/>
              <Route  path= '/quiz/:id'element = {<Quiz/>}/>
              <Route  path= '/'element = {<QuizList/>}/>
            </Routes>
        </Provider>
      </Layout>
    )
  }
}

export default App;
