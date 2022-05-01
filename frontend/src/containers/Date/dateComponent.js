import React from 'react'
import moment from 'moment';
import { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import ProductDetail from '../ProductDetail/productDetail';


const DateComponent = ({getSelectedDateNumber}) => {

    const [value, onChange] = useState(new Date());

    const [dayNumberSelected, setDayNuberSelected] = useState(0)
    const [monthNumberSelected, setMonthNumberSelected] = useState(0)
    const [yearNumberSelected, setYearNumberSelected] = useState(0)

    const handleDayPicker = () => {
        const newValue = value.toLocaleDateString()
        var arr = newValue.split('/');
        const dayNumber = arr[1]
        const monthNumber = arr[0]
        const yearNumber = arr[2]
        setDayNuberSelected(dayNumber)
        setMonthNumberSelected(monthNumber)
        setYearNumberSelected(yearNumber)
    }
    useEffect(() => {
        handleDayPicker()
    }, [value])



    // const [oneChecked, setOneChecked] = useState(false);
    // const [twoChecked, setTwoChecked] = useState(false);
    // const [threeChecked, setThreeChecked] = useState(false);
    // const [fourChecked, setFourChecked] = useState(false);
    // const [fiveChecked, setFiveChecked] = useState(false);
    // const [sixChecked, setSixChecked] = useState(false);

    // const oneHandleChange = () => {
    //     setOneChecked(!oneChecked)
    // }
    // const twoHandleChange = () => {
    //     setTwoChecked(!twoChecked)
    // }
    // const threeHandleChange = () => {
    //     setThreeChecked(!threeChecked)
    // }
    // const fourHandleChange = () => {
    //     setFourChecked(!fourChecked)
    // }
    // const fiveHandleChange = () => {
    //     setFiveChecked(!fiveChecked)
    // }
    // const sixHandleChange = () => {
    //     setSixChecked(!sixChecked)
    // }

    // if (oneChecked == true) {
    //     console.log("One Checked success");
    // } else console.log("One Checked fail");

    // if (twoChecked == true) {
    //     console.log("Two Checked success");
    // } else console.log("Two Checked fail");

   

    const [checked, setChecked] = useState(1);

    const oneHandleChange = () => {
        setChecked(dayNumberSelected)
    }
    const twoHandleChange = () => {
        setChecked(dayNumberSelected -1)
    }
    const threeHandleChange = () => {
        setChecked(dayNumberSelected -2)
    }
    const fourHandleChange = () => {
        setChecked(dayNumberSelected -3)
    }
    const fiveHandleChange = () => {
        setChecked(dayNumberSelected -4)
    }
    const sixHandleChange = () => {
        setChecked(dayNumberSelected -5)
    }

    

    console.log('checked Arr:',checked);

    getSelectedDateNumber(checked)


    return (
        <>

            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={oneHandleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={twoHandleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 1}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={threeHandleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 2}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={fourHandleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 3}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={fiveHandleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 4}/${yearNumberSelected}`} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={sixHandleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {`${monthNumberSelected}/${dayNumberSelected - 5}/${yearNumberSelected}`} </label>
            </div>

            <DatePicker onChange={onChange} value={value} onClickDay={handleDayPicker} />
        </>

    )
}

export default DateComponent