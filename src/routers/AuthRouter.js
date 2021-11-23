import React from 'react'
import { Route, Routes } from 'react-router'
import { NotFound } from '../pages/NotFound'
import { ProductsList } from '../pages/private/ProductsList'
import { Dashboard } from '../pages/private/Dashboard'
import { Perfil } from '../pages/private/Perfil'


export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}>
                <Route index element={<Perfil/>}/>
                <Route path="products" element={<ProductsList/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}
