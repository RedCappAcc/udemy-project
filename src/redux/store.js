import { createStore} from 'redux';


let deafaultstate = {
    result:[],
    finished:false,
    clikable:'auto',
    activeQuestion:0,
     quiz:[
        {   
            id:1,
            question:'В каком году было образовано Казахское ханство ?',
            answer:[
                {text:'1465',id:1},
                {text:'1991',id:2},
                {text:'1914',id:3},
                {text:'1645',id:4},
            ],
            rightAnswerId:1,
        },
        {   
            id:2,
            question:'Кто был первым ханом казахского ханства ?',
            answer:[
                {text:'Жанибек',id:1},
                {text:'Абылай',id:2},
                {text:'Керей',id:3},
                {text:'Кенесары',id:4},
             ],
            rightAnswerId:3,
        },
        {   
            id:1,
            question:'В каком году было образовано Казахское ханство ?',
            answer:[
                {text:'1465',id:1},
                {text:'1991',id:2},
                {text:'1914',id:3},
                {text:'1645',id:4},
            ],
            rightAnswerId:1,
        },
    ]
}
function reducer(state = deafaultstate, action) {
    switch(action.type) {
        case "NEXT_QUESTION":
            return {...state, activeQuestion: state.activeQuestion+1}
        case "DEL_QUESTION":
            return {...state, activeQuestion: 0}
        case "ADD_FINISHED":
            return {...state,finished: true}
        case "DEL_FINISHED":
            return {...state,finished: false}
        case "CLICABLE_AUTO":
             return{...state,clikable:'auto'}
        case "CLICABLE_NONE":
            return{...state,clikable:'none'}
        case "ADD_RESULT":
            let resultTmp = []
            resultTmp.push(action.payload)
            return{...state, result:[...state.result, ...resultTmp]}
        case "DEL_RESULT":
            return{...state, result:[]}
        default: return state;
    }
}

const store = createStore(reducer);


export default store;