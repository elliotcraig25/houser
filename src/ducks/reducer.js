const initialState = {
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
}

const UPDATE_LISTING_ONE = 'UPDATE_LISTING_ONE'

export function updateListingOne(listingOneInput){
    console.log(`i think it might be working`)
    return {
        type: UPDATE_LISTING_ONE,
        payload: listingOneInput
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_LISTING_ONE:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}