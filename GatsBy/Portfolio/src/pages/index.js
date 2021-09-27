import React from 'react'
import Home from '../components/functional/home-banner'
import Layout from '../components/common/layout'
import  Aboutmyself  from '../components/functional/aboutmyself'
import HomeServices from '../components/functional/home-page-services'

const App = () => {
    return (
        <Layout>
            <Home />
            <Aboutmyself />
            <HomeServices />
        </Layout>
    )
}

export default App

