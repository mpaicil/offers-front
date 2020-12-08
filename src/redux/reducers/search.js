//import { get } from 'lodash'
import { SEARCH_DATA_START, SEARCH_DATA_ERROR , SEARCH_DATA_COMPLETE } from '../../consts/actionTypes'

const initialState = {}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_DATA_START:
            return {...state};
            break;
        case SEARCH_DATA_ERROR:
            console.log("Salio Error!!")
            return {...state};
            break;
        case SEARCH_DATA_COMPLETE:
            console.log("Termino :)")
            console.log(action)
            return {...state, results: action.response.data};
            break;
        default:
            return {...state};
    }
}