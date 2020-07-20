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
            localStorage.setItem('user', JSON.stringify(action.user));
            return action.user;
        case 'USER_LOGOUT':
            localStorage.removeItem('userToken');
            localStorage.removeItem('user');
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

export function projects(state = [], action) {
    switch (action.type) {
        case 'PROJECTS_FETCH_DATA_SUCCESS':
            return action.projects;
        default:
            return state;
    }
}

export function voteProject(state = '', action) {
    switch (action.type) {
        case 'VOTE_PROJECT':
            return action.text
        default:
            return state;
    }
}

export function updateAccount(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_ACCOUNT':
            return action.data
        default: 
            return state;
    }
}

export function teams(state = [], action) {
    switch (action.type) {
        case 'TEAMS_FETCH_DATA_SUCCESS':
            return action.teams;
        default:
            return state;
    }
}