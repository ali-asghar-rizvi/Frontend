const Reducer = (state, action) => {
    switch (action.type) {
        case 'check':
            if ((state.count + 1) % 2 === 0)
                return {
                    count: state.count + 1, oddEven: "Even"
                };
            else
                return {
                    count: state.count + 1, oddEven: "Odd"
                };


        case 'reset':
            return initialValue()



        default:
            return new Error()
    }
};


export default Reducer;


export const initialValue = () => {
    return{
    count : 2,
    oddEven : "Even"
    }
};







