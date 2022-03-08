const initialState = {
    list: [
        { title: 'Primeira Nota', body: 'Testando 1,2,3...' }
    ]
}


export default (state = initialState, action) => {
    let newList = [...state.list] // copia de state.list para o redux para corrigir bug redux
    switch (action.type) {
        case 'ADD_NOTE':
            newList.push({
                title: action.payload.title,
                body: action.payload.body
            })
            break
    }


    return { ...state, list: newList } //ira retornar a list ou copia da list
}