import {Navigate} from 'react-router-dom'
import { useEffect } from 'react'
import {LogOut} from '../../store/actions/auth'
import {useDispatch} from 'react-redux'

function LogoutRoute(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(LogOut())
    },[])
    return(
        <Navigate to = {'/'}/>
    )
}

export default LogoutRoute