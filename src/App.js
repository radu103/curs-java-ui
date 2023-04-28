import React from "react";
import "./styles.css";

import { ThemeProvider} from "react-ui";
import { tokens, components } from "react-ui/themes/light";

// import Cars from "./cars"

const [cars, setCars] = useState([]);

function CarRow(props){
  return <div>{props.maker} and my color is {props.color}</div>
}

function fetchCarData(){
  fetch("https://localhost/v1/car/list")
    .then(response => {
      return response.json()
    }
    )
    .then(data => {
      setCars = data;
    })
}

useEffect(() => fetchUserData());

export default function App() {
  return (
    <ThemeProvider tokens={tokens} components={components}>
      <h1>Who lives in my garage?</h1>
      {cars.map((car) => <CarRow brand={car.makes} color={car.color}/>)}
    </ThemeProvider>
  );
}
