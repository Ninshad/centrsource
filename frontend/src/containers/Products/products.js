import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from "../../helpers/axios";
import ProductDetail from '../ProductDetail/productDetail';
import './product.css'

const Products = () => {

  const [foodItemData, setFoodItemData] = useState(null)
  const [firstFoodListCound, setFirstFoodListCound] = useState(0)
  const [secondFoodListCound, setSecondFoodListCound] = useState(1)
  const [thirdFoodListCound, setThirdFoodListCound] = useState(2)
  const [fourthFoodListCound, setFourthFoodListCound] = useState(3)

  const [selectedFoods, setSelectedFoods] = useState(null)
  console.log("selectedFoods", selectedFoods);

  const foodData = async () => {

    const APP_ID = "4bbacd58"
    let API_KEY = "2550f09da77228bf9cc9a7e3f8a7bc73"
    const response = await fetch(`https://api.edamam.com/search?app_id=4bbacd58&app_key=2550f09da77228bf9cc9a7e3f8a7bc73&q=pizza`);
    const data = await response.json()
    setFoodItemData(data)
    console.log(foodItemData);

  }
  console.log(foodItemData);

  useEffect(() => {
    const foodDatas = foodData()
  }, [])

  return (
    <div className='foodCards'>

      <div className="row">
  <div className="col-md-3" >
  <Card style={{ width: '15rem', marginLeft:'-320px' }}>
  <Card.Img variant="top" src={foodItemData?.hits[firstFoodListCound].recipe.image}  />
  <Card.Body>
    <Card.Title>{foodItemData?.hits[firstFoodListCound].recipe.label}</Card.Title>
    <Button className='addButton' value={selectedFoods} setSelectedFoods={{"imageUrl":foodItemData?.hits[firstFoodListCound].recipe.image, "name":foodItemData?.hits[firstFoodListCound].recipe.label }} >ADD</Button>
  </Card.Body>
</Card>
</div>
<div className="col-md-3" >
  <Card style={{ width: '15rem', marginLeft:'-250px' }}>
  <Card.Img variant="top" src={foodItemData?.hits[secondFoodListCound].recipe.image}  />
  <Card.Body>
    <Card.Title>{foodItemData?.hits[firstFoodListCound].recipe.label}</Card.Title>
    <Button className='addButton'>ADD</Button>
  </Card.Body>
</Card>
</div>
<div className="col-md-3" >
  <Card style={{ width: '15rem', marginLeft:'-180px' }}>
  <Card.Img variant="top" src={foodItemData?.hits[thirdFoodListCound].recipe.image}  />
  <Card.Body>
    <Card.Title>{foodItemData?.hits[firstFoodListCound].recipe.label}</Card.Title>
    <Button className='addButton'>ADD</Button>
  </Card.Body>
</Card>
</div>
<div className="col-md-3" >
  <Card style={{ width: '15rem', marginLeft:'-110px' }}>
  <Card.Img variant="top" src={foodItemData?.hits[fourthFoodListCound].recipe.image}  />
  <Card.Body>
    <Card.Title>{foodItemData?.hits[firstFoodListCound].recipe.label}</Card.Title>
    <Button className='addButton'>ADD</Button>
  </Card.Body>
</Card>
</div>

      </div>


      

      <ProductDetail />

    </div>
    // <div className="row">
      //   <div className="col-md-3">
      //     <img src={foodItemData?.hits[firstFoodListCound].recipe.image} alt="Image" />
      //   </div>
      //   <div className="col-md-3">
      //     <img src={foodItemData?.hits[secondFoodListCound].recipe.image} alt="Image" />
      //   </div>
      //   <div className="col-md-3">
      //     <img src={foodItemData?.hits[thirdFoodListCound].recipe.image} alt="Image" />
      //   </div>
      //   <div className="col-md-3">
      //     <img src={foodItemData?.hits[fourthFoodListCound].recipe.image} alt="Image" />
      //   </div>

      // </div>
  )
}

export default Products