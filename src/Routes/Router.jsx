import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import MyProfile from 'Pages/MyProfile';
import MyTransaction from 'Pages/MyTransaction';
import AddTransaction from 'Pages/AddTransaction';
import TransactionDetails from 'Pages/TransactionDetails';
import UpdateTransaction from 'Pages/UpdateTransaction';
import Error404 from 'Pages/Error404';


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register> ,
                },
                {
                    path: '/my-profile',
                    element: <MyProfile></MyProfile> ,
                },
                {
                    path: '/my-transaction',
                    element: <MyTransaction></MyTransaction>,
                },
                {
                    path: '/add-transaction',
                    element: <AddTransaction></AddTransaction>,
                },
                {
                    path: '/transaction-details',
                    element: <TransactionDetails></TransactionDetails>,
                },
                {
                    path: '/update-transaction',
                    element: <UpdateTransaction></UpdateTransaction>,
                },
            ]
        },
        {
            path : "/*",
            element : <Error404></Error404>
        },
    ]
);

export default router;