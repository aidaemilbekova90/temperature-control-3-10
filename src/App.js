import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [temperatureValue,setTemperatureValue]=useState(0);
  const [temperatureColor,setTemperatureColor]=useState("cold")
  const increaseTemperature=()=>{
    if(temperatureValue===30) return;
    const newTemperature=temperatureValue +1;
    if(newTemperature >=15){
      setTemperatureColor("hot")
    }
setTemperatureValue(newTemperature)
  }

  const decreaseTemperature=()=>{
    if(temperatureValue===0) return;
    
    const newTemperature=temperatureValue -1;
    if(newTemperature <15){
      setTemperatureColor("cold")
    }
setTemperatureValue(newTemperature)
  }
  // const dec=()=>{
  //   setTemperatureValue(temperatureValue -1)
  //     }
  // const dec=()=>{
  //   setTemperatureValue(temperatureValue -1)
  //     }
  return (
    <Card className="card__container">
      <Circle className="temperature__display-container">
        <Temperature className={`temperature ${temperatureColor}`}>{temperatureValue}°C</Temperature>
      </Circle>
      <ContainerButton className="button__container">
       <MyButton onClick={increaseTemperature}>+</MyButton>
         <MyButton onClick={decreaseTemperature}>-</MyButton>
      </ContainerButton>

    </Card>
  );
}

export default App;

const Card = styled.div`
  height: 400px;
  width: 300px;
  background: #2b5870;
  border-radius: 20px;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
`;
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

const Temperature = styled.div`
  display: flex;
  border-radius: 50%;
  color: #ffffff;
  height: 220px;
  width: 220px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  border: 3px #ffffff solid;
  transition: background 0.5s;
`;

const ContainerButton=styled.div`
 display: flex;
  justify-content: space-evenly;
  align-items: center;`

const MyButton=styled.button`
border-radius: 100px;
  height: 80px;
  width: 80px;
  font-size: 32px;
  color: #ffffff;
  background: rgb(105, 104, 104);
  border: 2px #ffffff solid;
`