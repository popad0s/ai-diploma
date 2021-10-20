import {CREATE_CAMPUS} from '../actions/actions'

const campusCreator = campus => {
    return {
        type: CREATE_CAMPUS,
        value: {
            number: campus.number,
            area: campus.area,
            floors: campus.floors,
            year: campus.year
        }
    }
}

export default campusCreator;