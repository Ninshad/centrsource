import React from 'react'
import moment from 'moment';
import { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';


const DateComponent = () => {

    const [value, onChange] = useState(new Date());

    const [dayNumberSelected, setDayNuberSelected] = useState(0)
    const [monthNumberSelected, setMonthNumberSelected] = useState(0)
    const [yearNumberSelected, setYearNumberSelected] = useState(0)


    const [newSelectedDate, setNewSelectedDate] = useState(0)
    const oneSelectd = newSelectedDate - dayNumberSelected

    const handleDayPicker = () =>{
        const newValue = value.toLocaleDateString()
        console.log('newwww:', newValue);
        var arr = newValue.split('/');
        const dayNumber = arr[1]
        const monthNumber = arr[0]
        const yearNumber = arr[2]
    
        console.log('Day: ', dayNumber,'/', monthNumber, yearNumber);
        setDayNuberSelected(dayNumber)
        setMonthNumberSelected(monthNumber)
        setYearNumberSelected(yearNumber)


        setNewSelectedDate(newValue)
    }

    console.log('newSelectedDate', dayNumberSelected);
    useEffect(() => {
      handleDayPicker()
      console.log('Clickedddddddddddddddddddd');
    }, [value])
    

    // const newValue = value.toLocaleDateString()
    // console.log('newwww:', newValue);
    // var arr = newValue.split('/');
    // const dayNumber = arr[1]

    // console.log('Day: ', dayNumber);

    // const [currDate, setCurrDate] = useState(dayNumberSelected - 28)
    // const [onePevDate, setOnePevDate] = useState(dayNumberSelected - 27)
    // const [twoPevDate, setTwoPevDate] = useState(dayNumberSelected - 26)
    // const [threePevDate, setThreePevDate] = useState(3)
    // const [fourPevDate, setFourPevDate] = useState(4)
    // const [fivePevDate, setFivePevDate] = useState(5)



    const [checked, setChecked] = useState(false)

    

    let currDates = new Date();
    currDates.setDate(currDates.getDate() - newSelectedDate)
    let currntDate = currDates.toLocaleDateString();
    console.log('currntDate', currntDate);

    let onePreDates = new Date();
    onePreDates.setDate(onePreDates.getDate() - (dayNumberSelected - 1))
    let onepDate = onePreDates.toLocaleDateString();
    console.log("onepDate", onepDate);

    // let twoPreDates = new Date();
    // twoPreDates.setDate(twoPreDates.getDate() - twoPevDate)
    // let twopDate = twoPreDates.toLocaleDateString();
    // console.log(twopDate);

    // let threePreDates = new Date();
    // threePreDates.setDate(threePreDates.getDate() - threePevDate)
    // let threepDate = threePreDates.toLocaleDateString();
    // console.log(threepDate);

    // let fourPreDates = new Date();
    // fourPreDates.setDate(fourPreDates.getDate() - fourPevDate)
    // let fourpDate = fourPreDates.toLocaleDateString();
    // console.log(fourpDate);

    // let fivePreDates = new Date();
    // fivePreDates.setDate(fivePreDates.getDate() - fivePevDate)
    // let fivepDate = fivePreDates.toLocaleDateString();
    // console.log(fivepDate);

    // twopDate, threepDate, fourpDate, fivepDate
    const [allDates, setAllDates] = useState({currntDate, onepDate  })
    console.log('allDates', allDates);

    // let someDate = new Date();
    // let someNew = someDate.getDay();
    // console.log('Some date:', someNew);


    const handleChange = () => {
        setChecked(!checked)
    }

    if (checked == true) {
        console.log("Checked success");
    } else console.log("Checked fail");

    

    return (
        <>
        
            {/* <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {newSelectedDate} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {allDates.onepDate} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {allDates.twopDate} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {allDates.threepDate} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {allDates.fourpDate} </label>
            </div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={handleChange} />
                <label className="custom-control-label" for="defaultUnchecked"> {allDates.fivepDate} </label>
            </div> */}

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
        </>

    )
}

export default DateComponent