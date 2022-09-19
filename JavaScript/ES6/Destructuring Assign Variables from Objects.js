const user = { name: 'John Doe', age: 34 };



//   Change the name variable to userName and age to userAge also get values of their varible 

const { name: userName, age: userAge } = user;







// Practice 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;



// old way 

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
