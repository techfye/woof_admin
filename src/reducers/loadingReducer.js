 const Loading = {
    loading: false,
}

const loadingReducer = (state = Loading, action) => {
    switch (action.type) {
        case 'LOADING':
            return { loading: true }
        case 'DONE':
            return { loading: false }
        default:
            return state
    }
}

export default loadingReducer