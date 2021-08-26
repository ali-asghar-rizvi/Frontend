import React from 'react'
import Home from '../components/functional/home-banner'
import Layout from '../components/common/layout'
import  Aboutmyself  from '../components/functional/aboutmyself'

const App = () => {
    return (
        <Layout>
            <Home />
            <Aboutmyself />
        </Layout>
    )
}

export default App

