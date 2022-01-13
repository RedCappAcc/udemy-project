import {Navigate} from 'react-router-dom'
import { useEffect } from 'react'
import {LogOut} from '../../store/actions/auth'
import {useDispatch} from 'react-redux'

function LogoutRoute(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(LogOut())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <Navigate to = {'/'}/>
    )
}

export default LogoutRoute