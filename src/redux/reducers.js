export function dataHaveError(state = false, action) {
    switch (action.type) {
        case 'DATA_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function dataIsLoading(state = false, action) {
    switch (action.type) {
        case 'DATA_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function companies(state = [], action) {
    switch (action.type) {
        case 'COMPANIES_FETCH_DATA_SUCCESS':
            localStorage.setItem('companies', JSON.stringify(action.companies));
            
            return action.companies;

        default:
            return state;
    }
}

export function userLogin(state = {}, action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            localStorage.setItem('userToken', action.user.token);
            return action.user;
        case 'USER_LOGOUT':
            localStorage.removeItem('userToken');
            return {}
        default:
            return state;
    }
}

export function topics(state = [], action) {
    switch (action.type) {
        case 'TOPICS_FETCH_DATA_SUCCESS':
            return action.topics;
        case 'TOPIC_DELETE':
            return action.topics.filter(topic => topic.id !== action.id)
        default:
            return state;
    }
}

export function likeTopic(state = '', action) {
    switch (action.type) {
        case 'LIKE_TOPIC':
            return action.text
        default: 
            return state;
    }
}