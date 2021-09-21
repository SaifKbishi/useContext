import react, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import plantsArray from '../files/plantsDB';

export function PLS() {
  const [message, setMessage] = useState('the message with be displayed here');
  // console.log(plantsArray.plants);
  const itemToAdd = {
      "id": "cucumber_iznik2",
      "name": "Cucumber - Iznik2",
      "imageId": "iznik",
      "seedToCrop": "450 days",
      "yield": "About 250 fruits",
      "lifeCycle": "10-15 harvests",
      "description": "Iznik produces good yields of 3 1/2–4ֿֿ\" spineless, seedless, dark green snack cucumbers. Multiple fruits per node. Excellent flavor. Pick daily for best quality. Gynoecious and parthenocarpic. High resistance to powdery mildew and scab.",
      "nutritionFacts": {
        "portionInfo": "Nutrition Value per 100 g.",
        "items": [
          {
            "key": "Energy",
            "nutrientValue": "12 kcal",
            "percentageOfRDA": "<1%"
          },
          {
            "key": "Carbohydrates",
            "nutrientValue": "2.16 g",
            "percentageOfRDA": "1.6%"
          },
          {
            "key": "Protein",
            "nutrientValue": "0.59 g",
            "percentageOfRDA": "1%"
          },
          {
            "key": "Total Fat",
            "nutrientValue": "0.16 g",
            "percentageOfRDA": "0.75%"
          },
          {
            "key": "Cholesterol",
            "nutrientValue": "0 mg",
            "percentageOfRDA": "0%"
          },
          {
            "key": "Dietary Fiber",
            "nutrientValue": "0.7 mg",
            "percentageOfRDA": "2%"
          },
          {
            "key": "Folates",
            "nutrientValue": "14 µg",
            "percentageOfRDA": "3.5%"
          },
          {
            "key": "Niacin",
            "nutrientValue": "0.037 mg",
            "percentageOfRDA": "<1%"
          },
          {
            "key": "Pantothenic acid",
            "nutrientValue": "0.259 mg",
            "percentageOfRDA": "5%"
          },
          {
            "key": "Pyridoxine",
            "nutrientValue": "0.051 mg",
            "percentageOfRDA": "4%"
          },
          {
            "key": "Riboflavin",
            "nutrientValue": "0.025 mg",
            "percentageOfRDA": "2%"
          },
          {
            "key": "Thiamin",
            "nutrientValue": "0.031 mg",
            "percentageOfRDA": "2.5%"
          },
          {
            "key": "Vitamin A",
            "nutrientValue": "12 IU",
            "percentageOfRDA": "<1%"
          },
          {
            "key": "Vitamin C",
            "nutrientValue": "3.2 mg",
            "percentageOfRDA": "5%"
          },
          {
            "key": "Vitamin E",
            "nutrientValue": "0.03 mg",
            "percentageOfRDA": "0%"
          },
          {
            "key": "Vitamin K",
            "nutrientValue": "7.2 µg",
            "percentageOfRDA": "6%"
          },
          {
            "key": "Sodium",
            "nutrientValue": "2 mg",
            "percentageOfRDA": "0%"
          },
          {
            "key": "Potassium",
            "nutrientValue": "136 mg",
            "percentageOfRDA": "3%"
          },
          {
            "key": "Calcium",
            "nutrientValue": "14 mg",
            "percentageOfRDA": "1.4%"
          },
          {
            "key": "Iron",
            "nutrientValue": "0.22 mg",
            "percentageOfRDA": "3.5%"
          },
          {
            "key": "Magnesium",
            "nutrientValue": "12 mg",
            "percentageOfRDA": "3%"
          },
          {
            "key": "Manganese",
            "nutrientValue": "0.079 mg",
            "percentageOfRDA": "3.5%"
          },
          {
            "key": "Phosphorus",
            "nutrientValue": "21 mg",
            "percentageOfRDA": "3%"
          },
          {
            "key": "Zinc",
            "nutrientValue": "0.17 mg",
            "percentageOfRDA": "1.5%"
          },
          {
            "key": "Carotene-ß",
            "nutrientValue": "31 µg",
            "percentageOfRDA": "--"
          },
          {
            "key": "Crypto-xanthin-ß",
            "nutrientValue": "18 µg",
            "percentageOfRDA": "--"
          },
          {
            "key": "Lutein-zeaxanthin",
            "nutrientValue": "16 µg",
            "percentageOfRDA": "--"
          }
        ]
      }
    }
  const itemIdToRemove = 'tomato_sunrise';
  const itemToUpdate = 'cucumber_iznik';

  const styles = {
    margin: '10px',
    backgroundColor: '#3D94F6',
    fontSize: '20px',
    fontWeight: '100',
    padding: '10px 20px',
    borderRadius: '20px',
    boxShadow: '1px 1px 20px 0 #000000',
    textShadow: '1px 1px 20px #000000',
    border: 'solid #337FED 1px',
  }

  const writeToLocalStorage = (plantsArray)=>{
    console.log('writting')
    if(localStorage.setItem('Plants', JSON.stringify(plantsArray))){
      setMessage('writting to LS was successful');
    }    
  }

  const deletePlantsLocalStorage =()=>{
    if(localStorage.removeItem('Plants') ){
      setMessage('Plants was deleted from LS was successful');
    }
  }

  const readFromLocalStorage =()=>{
    const readLS = JSON.parse(localStorage.getItem('Plants'));
    if(readLS){
      console.log('readLS from LS: ',readLS)
      setMessage('read from LS was successful');
    }
    return readLS;
  }

  const deleteAnItemFromLocalStorage =()=>{
    const fromLS = readFromLocalStorage();
    if(fromLS.find(item => item.id === itemIdToRemove)){//tomato_sunrise
      console.log('found the item to remove');
      const newfromLS = fromLS.filter(item => item.id != itemIdToRemove);
      deletePlantsLocalStorage();
      writeToLocalStorage(newfromLS);
      setMessage('deleting an item from LS was successful');
    }
    
  }

  const addAnItemToLocalStorage =()=>{ //cucumber_iznik2
    const fromLS = readFromLocalStorage();
    console.log('itemToAdd.id', itemToAdd.id)
    if(fromLS.find(item => item.id === itemToAdd.id)){
      console.log('found the item, Cannot add this one');  
      setMessage('found the item, Cannot add this one');    
    }else{
      fromLS.push(itemToAdd);
      writeToLocalStorage(fromLS);
      setMessage('add An Item to LS was successful');
    }   
  }
  const updateAnItemToLocalStorage =()=>{
    const fromLS = readFromLocalStorage();
    if(fromLS.find(item => item.id === itemToUpdate)){
      console.log('found item to update');
    }
    
  }

  const clearAllLocalStorage =()=>{
    if(localStorage.clear()){
      setMessage('All LocalStorage were CLEARED');
    }
  }
  
  return(    
    <div>
      <h3>LocalStorage CRUD</h3>
      <h3>{message}</h3>
      <div >
        <button onClick={()=>writeToLocalStorage(plantsArray.plants) } style={styles}>write to LS</button>
        <button onClick={()=>deletePlantsLocalStorage() } style={styles}>Delete Plants from LS</button>
        <button onClick={()=>readFromLocalStorage() } style={styles}>Display from LS</button>

        <button onClick={()=>deleteAnItemFromLocalStorage() } style={styles}>Delete an item from LS</button>
        <button onClick={()=>addAnItemToLocalStorage() } style={styles}>Add an item LS</button>
        <button onClick={()=>updateAnItemToLocalStorage() } style={styles}>Update an item in LS</button>

        <button onClick={()=>clearAllLocalStorage() } style={styles}>Clear ALL LS</button>
      
      </div>
   </div>
  );
}


export default PLS
 