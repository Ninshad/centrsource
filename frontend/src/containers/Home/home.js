import React from 'react'
import { useState } from 'react';
import DateComponent from '../Date/dateComponent'
import Header from '../../components/Header/header'
import Products from '../Products/products'
import ProductDetail from '../ProductDetail/productDetail';

const Home = () => {

    const [selectedNumberFromDateComp, setSelectedNuberFromDateComp] = useState(2)
    const getSelectedDateNumber = (checked) =>{
        setSelectedNuberFromDateComp(checked)
    }

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-6">
                    <DateComponent getSelectedDateNumber={getSelectedDateNumber} />
                </div>
                <div className="col-md-6">
                    <Products selectedNumberFromDateComp={selectedNumberFromDateComp} />
                </div>
            </div>


        </>
    )
}

export default Home