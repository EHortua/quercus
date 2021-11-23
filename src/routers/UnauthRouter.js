import React from 'react'
import { Route, Routes } from 'react-router'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/public/Home'
import { Login } from '../pages/public/Login'
import { RecoverPass } from '../pages/public/RecoverPass'

export const UnauthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route index element={<Login/>}/>
                <Route path="recover" element={<RecoverPass/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}
