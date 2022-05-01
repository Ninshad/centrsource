import React from 'react'
import { useState, useEffect } from 'react';

const ProductDetail = ({selectedNumberFromDateComp, selectedFoods}) => {

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






  // const arrayPush = () =>{
  //   const dayArr = [selectedNumberFromDateComp]
  // dayArr.push(selectedNumberFromDateComp)
  // console.log('dayArr', dayArr);
  // }
  
//   useEffect(() => {
//     arrayPush()
// }, [selectedNumberFromDateComp])

  // const [selectedDayNum, setSelectedDayNum] = useState('')
  // setSelectedDayNum([...selectedDayNum, selectedNumberFromDateComp])
  
  // console.log('dayNumSelected', selectedDayNum);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <h1>Your Selected Foods</h1>
          <h2>{`${monthNumberSelected}/${selectedNumberFromDateComp}/${yearNumberSelected}`}</h2>
        </div>
      </div>
    </>
  )
}

export default ProductDetail