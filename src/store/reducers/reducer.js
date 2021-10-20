const initialState = {
    campuses: [
        {"number": ""},
        {
            "number": 1,
            "floors": 2,
            "area": 6000,
            "year": 2018,
            "electricityPerMonth": 10000,
            "waterSupply": 170,
            "gas": 3000
        },
        {
            "number": 2,
            "floors": 5,
            "area": 3000,
            "year": 2017,
            "electricityPerMonth": 4000,
            "waterSupply": 100,
            "gas": 1600
        },
        {
            "number": 3,
            "floors": 7,
            "area": 13000,
            "year": 2014,
            "electricityPerMonth": 14000,
            "waterSupply": 250,
            "gas": 4400
        },
        {
            "number": 4,
            "floors": 3,
            "area": 3200,
            "year": 2018,
            "electricityPerMonth": 6000,
            "waterSupply": 100,
            "gas": 2000
        },
        {
            "number": 5,
            "floors": 5,
            "area": 5000,
            "year": 2019,
            "electricityPerMonth": 8000,
            "waterSupply": 180,
            "gas": 2300
        }
    ],
    from: '',
    to: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CAMPUSES_DATA":
            return {
                ...state,
                campuses: [...action.payload]
            }
        case "CREATE_CAMPUS":
            return {
                ...state,
                campuses: [...state.campuses, action.payload]
            }
        case "GET_FROM":
            return {
                ...state,
                from: action.payload
            }
        case "GET_TO":
            return {
                ...state,
                to: action.payload
            }
        default:
            return state;
    }
}


// 150 m3 water, 3000 m3 gas, 10000 kWt electr, 5000 sq m area: all per month


// [
//     {
//       "number":1,
//       "floors":2,
//       "area":6000,
//       "year":2018,
//       "electricityPerMonth":10000,
//       "waterSupply":170,
//       "gas":3000
//     },
//     {
//       "number":2,
//       "floors":5,
//       "area":3000,
//       "year":2017,
//       "electricityPerMonth":4000,
//       "waterSupply":100,
//       "gas":1600
//     },
//     {
//       "number":3,
//       "floors":7,
//       "area":13000,
//       "year":2014,
//       "electricityPerMonth":14000,
//       "waterSupply":250,
//       "gas":4400
//     },
//     {
//       "number":4,
//       "floors":3,
//       "area":3200,
//       "year":2018,
//       "electricityPerMonth":6000,
//       "waterSupply":100,
//       "gas":2000
//     },
//     {
//       "number":5,
//       "floors":5,
//       "area":5000,
//       "year":2019,
//       "electricityPerMonth":8000,
//       "waterSupply":180,
//       "gas":2300
//     }
//   ]