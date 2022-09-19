// old way bad practice 

const profileUpdate1 = (profileData) => {
    const { name, age, nationality, location } = profileData;
}



// ES6 Feature New Way 
const profileUpdate2 = ({ name, age, nationality, location }) => {

}




// Practice 

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const half = (stats) => (stats.max + stats.min) / 2.0;
