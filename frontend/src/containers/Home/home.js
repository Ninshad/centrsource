import React from 'react'
import DateComponent from '../Date/dateComponent'
import Header from '../../components/Header/header'
import Products from '../Products/products'

const Home = () => {
    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-6">
                    <DateComponent />
                </div>
                <div className="col-md-6">
                    <Products />
                </div>
            </div>


        </>
    )
}

export default Home