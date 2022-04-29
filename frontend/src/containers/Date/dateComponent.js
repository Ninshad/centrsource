import React from 'react'
import moment from 'moment';
import { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import ProductDetail from '../ProductDetail/productDetail';


const DateComponent = () => {

    const [value, onChange] = useState(new Date());

    const [dayNumberSelected, setDayNuberSelected] = useState(0)
    const [monthNumberSelected, setMonthNumberSelected] = useState(0)
    const [yearNumberSelected, setYearNumberSelected] = useState(0)


    const [newSelectedDate, setNewSelectedDate] = useState(0)
    const oneSelectd = newSelectedDate - dayNumberSelected

    const handleDayPicker = () => {
        const newValue = value.toLocaleDateString()
        var arr = newValue.split('/');
        const dayNumber = arr[1]
        const monthNumber = arr[0]
        const yearNumber = arr[2]
        setDayNuberSelected(dayNumber)
        setMonthNumberSelected(monthNumber)
        setYearNumberSelected(yearNumber)


        setNewSelectedDate(newValue)
    }
    useEffect(() => {
        handleDayPicker()
    }, [value])


    



    const [checked, setChecked] = useState(false)



    // let currDates = new Date();
    // currDates.setDate(currDates.getDate() - newSelectedDate)
    // let currntDate = currDates.toLocaleDateString();
    // console.log('currntDate', currntDate);

    // let onePreDates = new Date();
    // onePreDates.setDate(onePreDates.getDate() - (dayNumberSelected - 1))
    // let onepDate = onePreDates.toLocaleDateString();
    // console.log("onepDate", onepDate);

    // const [allDates, setAllDates] = useState({ currntDate, onepDate })
    // console.log('allDates', allDates);


    const handleChange = () => {
        setChecked(!checked)
    }

    if (checked == true) {
        console.log("Checked success");
    } else console.log("Checked fail");



    return (
        <>

            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 1}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 2}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 3}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 4}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 5}/${yearNumberSelected}`} </label>
            </div>

            <DatePicker onChange={onChange} value={value} onClickDay={handleDayPicker} />

            <ProductDetail />
        </>

    )
}

export default DateComponent