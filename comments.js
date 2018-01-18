import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

const initialState = {
    comments: [],
    users: []
};

// function reducer(state = initialState, action) {
//     switch(action.type) {
//         case ADD_COMMENT:
//             return Object.assign({}, state, {
//                 comments: [
//                 {
//                     id: action.id,
//                     text: action.text,
//                     votes: 0
//                 }
//                 , ...state]
//             })
function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments];
            
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            })
            
        case actions.EDIT_COMMENT:
            return state.map( comment => {
                return comment.id === action.id ?
                    Object.assign({}, comment, {
                        text: action.text
                    }) :
                    comment
            })
           
        case actions.THUMB_UP_COMMENT:
            return state.map( comment => {
                return comment.id === action.id ?
                    Object.assign({}, comment, {
                        votes: comment.votes + 1
                    }) :
                    comment
            })    

        case actions.THUMB_DOWN_COMMENT:
            return state.map ( comment => {
                return comment.id === action.id ?
                    Object.assign({}, comment, {
                         votes: comment.votes - 1
                    }) :
                    comment 
            })  
        default:
            return state;
    }
}

export default comments;