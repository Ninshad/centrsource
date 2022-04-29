import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from "../../helpers/axios";
import './product.css'

const Products = ({ selectedNumberFromDateComp }) => {

  const [foodItemData, setFoodItemData] = useState(null)


  const [firstFoodListCound, setFirstFoodListCound] = useState(0)
  const [secondFoodListCound, setSecondFoodListCound] = useState(1)
  const [thirdFoodListCound, setThirdFoodListCound] = useState(2)
  const [fourthFoodListCound, setFourthFoodListCound] = useState(3)

  const foodData = async () => {

    const APP_ID = "4bbacd58"
    let API_KEY = "2550f09da77228bf9cc9a7e3f8a7bc73"
    const response = await fetch(`https://api.edamam.com/search?app_id=4bbacd58&app_key=2550f09da77228bf9cc9a7e3f8a7bc73&q=${selectedNumberFromDateComp}`);
    const data = await response.json()
    setFoodItemData(data)
  }
  console.log(foodItemData);
  useEffect(() => {
    const foodDatas = foodData()
  }, [selectedNumberFromDateComp])


// Selected Foods

  const [selectedFoods, setSelectedFoods] = useState('');
  const [aClassName, setAclassName] = useState('');
  const [bClassName, setBclassName] = useState('');
  const [cClassName, setCclassName] = useState('');
  const [dClassName, setDclassName] = useState('');
  const [AtoggleButton, setAtoggleButton] = useState(true);
  const [BtoggleButton, setBtoggleButton] = useState(true);
  const [CtoggleButton, setCtoggleButton] = useState(true);
  const [DtoggleButton, setDtoggleButton] = useState(true);



  const foodAhandler = (e) => {
    e.preventDefault()
    setSelectedFoods([...selectedFoods, "a"])
    setAtoggleButton(!AtoggleButton)
    if(AtoggleButton===true){
      setAclassName('selectedGreen')
    }else setAclassName('')
  }
  const foodBhandler = (e) => {
    e.preventDefault()
    setSelectedFoods([...selectedFoods, "b"])
    setBtoggleButton(!BtoggleButton)
    if(BtoggleButton===true){
      setBclassName('selectedGreen')
    }else setBclassName('')
  }
  const foodChandler = (e) => {
    e.preventDefault()
    setSelectedFoods([...selectedFoods, "c"])
    setCtoggleButton(!CtoggleButton)
    if(CtoggleButton===true){
      setCclassName('selectedGreen')
    }else setCclassName('')
  }
  const foodDhandler = (e) => {
    e.preventDefault()
    setSelectedFoods([...selectedFoods, "d"])
    setDtoggleButton(!DtoggleButton)
    if(DtoggleButton===true){
      setDclassName('selectedGreen')
    }else setDclassName('')
  }
  console.log(selectedFoods);


  return (
    <div className='foodCards'>

      <div className="row">
        <div className="col-md-3" >
          <div className={aClassName}>
          <Card style={{ width: '15rem', marginLeft: '-320px' }}>
            <Card.Img variant="top" src={foodItemData?.hits[firstFoodListCound].recipe.image} />
            <Card.Body>
              <Card.Title>{foodItemData?.hits[firstFoodListCound].recipe.label}</Card.Title>
              <Button className='btn btn-success' onClick={foodAhandler} >ADD</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div className="col-md-3" >
        <div className={bClassName}>
          <Card style={{ width: '15rem', marginLeft: '-250px' }}>
            <Card.Img variant="top" src={foodItemData?.hits[secondFoodListCound].recipe.image} />
            <Card.Body>
              <Card.Title>{foodItemData?.hits[firstFoodListCound].recipe.label}</Card.Title>
              <Button className='btn btn-success' onClick={foodBhandler}>ADD</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div className="col-md-3" >
        <div className={cClassName}>
          <Card style={{ width: '15rem', marginLeft: '-180px' }}>
            <Card.Img variant="top" src={foodItemData?.hits[thirdFoodListCound].recipe.image} />
            <Card.Body>
              <Card.Title>{foodItemData?.hits[firstFoodListCound].recipe.label}</Card.Title>
              <Button className='btn btn-success' onClick={foodChandler}>ADD</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div className="col-md-3" >
        <div className={dClassName}>
          <Card style={{ width: '15rem', marginLeft: '-110px' }}>
            <Card.Img variant="top" src={foodItemData?.hits[fourthFoodListCound].recipe.image} />
            <Card.Body>
              <Card.Title>{foodItemData?.hits[firstFoodListCound].recipe.label}</Card.Title>
              <Button className='btn btn-success' onClick={foodDhandler}>ADD</Button>
            </Card.Body>
          </Card>
          </div>
        </div>

      </div>

    </div>
    
  )
}

export default Products