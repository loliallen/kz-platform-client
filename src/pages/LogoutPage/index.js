import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import actions from '../../storage/actions'

export const LogoutPage = () => {
    const d = useCallback(useDispatch())

    useEffect(()=>{
        d(actions.app.logout())
    },[])
    return (
        <Redirect to="/"/>
    )
}
