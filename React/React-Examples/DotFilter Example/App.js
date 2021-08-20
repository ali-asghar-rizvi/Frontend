import React,{Component} from 'react';

class MyFirstReactComponent extends Component {
   render() {
       const cityArray = ["Karachi", "Lahore", "Peshawer", "Quetta"]

       return (
           <ul>
               {
                   cityArray.map((city) => <li key={city}> {city} </li>)
               }
           </ul>
       )}
}


export default MyFirstReactComponent;



