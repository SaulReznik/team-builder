// --------------------Companies actions---------------//

export function dataHaveError(bool) {
    return {
        type: 'DATA_HAVE_ERROR',
        hasError: bool
    };
}

export function dataIsLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}

export function companiesFetchDataSuccess(companies) {
    return {
        type: 'COMPANIES_FETCH_DATA_SUCCESS',
        companies
    };
}

export function companiesFetchData(url) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                
                dispatch(dataIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then((json) => dispatch(companiesFetchDataSuccess(json)))
            .catch(() => dispatch(dataHaveError(true)));
    };
}

//------------------------------Login actions----------------------//

export function userLoginSuccess(user) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        user
    }
}

export function userLogoutSuccess() {
    return {
        type: 'USER_LOGOUT'
    }
}

export function userLogout(url) {
    return dispatch => {
        
        fetch(url, {
            headers: {
                'token': localStorage.getItem('userToken'),
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })

        dispatch(userLogoutSuccess());
    }
}

//----------------------------Topics--------------------------//

export function topicsFetchDataSuccess(topics) {
    return {
        type: 'TOPICS_FETCH_DATA_SUCCESS',
        topics
    }
}

export function topicsFetchData(url) {
    return dispatch => {

        fetch(url, {
            headers: {
                'token': localStorage.getItem('userToken')
            }
        })
            .then((response) => {
                return response;
            })
            .then(response => response.json())
            .then((json) => dispatch(topicsFetchDataSuccess(json)))
    };
}

export function topicDeleteSuccess(topics, id) {
    return {
        type: 'TOPIC_DELETE',
        topics,
        id
    }
}

export function topicDelete(url, topics, id) {
    return dispatch => {

        fetch(`${url}/${id}`, {
            headers: {
                'token': localStorage.getItem('userToken')
            },
            method: 'DELETE'
        })
        
        dispatch(topicDeleteSuccess(topics, id));
    }
}

export function likeTopicSuccess(text) {
    return {
        type: 'LIKE_TOPIC',
        text
    }
}

export function likeTopic(url, id, text) {
    return dispatch => {
        const validData = JSON.stringify({type: text});
        console.log(validData);
        fetch(`${url}/${id}/voting`, {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('userToken')
            },
            method: 'POST',
            body: validData
        })

        dispatch(likeTopicSuccess(text));
    }
}

//----------------------------Projects------------------------//

export function projectsFetchDataSuccess(projects) {
    return {
        type: 'PROJECTS_FETCH_DATA_SUCCESS',
        projects
    }
}

export function projectsFetchData(url) {
    return dispatch => {

        fetch(url, {
            headers: {
                'token': localStorage.getItem('userToken')
            }
        })
            .then((response) => {
                return response;
            })
            .then(response => response.json())
            .then((json) => dispatch(projectsFetchDataSuccess(json)))
    };
}

export function voteProjectSuccess(text) {
    return {
        type: 'VOTE_PROJECT',
        text
    }
}

export function voteProject(url, id, text) {
    return dispatch => {
        const validData = JSON.stringify({ type: text });

        fetch(`${url}/${id}/voting`, {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('userToken')
            },
            method: 'POST',
            body: validData
        })
            .then(() => dispatch(voteProjectSuccess(text)))
            .then(() => dispatch(projectsFetchData(url)))
    }
}

//----------------------------------Account update-------------------------------//

export function updateAccountSuccess(data) {
    return {
        type: 'UPDATE_ACCOUNT',
        data,
    }
}

export function updateAccount(url, data) {
    return dispatch => {
        const validData = JSON.stringify(data);
        console.log(validData);
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('userToken')
            },
            method: 'PUT',
            body: validData
        })
            .then(() => dispatch(updateAccountSuccess(data)))
    }
}

//---------------------------------Teams--------------------------------//

export function teamsFetchDataSuccess(teams) {
    return {
        type: 'TEAMS_FETCH_DATA_SUCCESS',
        teams
    }
}

export function teamsFetchData(url) {
    return dispatch => {

        fetch(url, {
            headers: {
                'token': localStorage.getItem('userToken')
            }
        })
            .then((response) => {
                return response;
            })
            .then(response => response.json())
            .then(json => dispatch(teamsFetchDataSuccess(json)))
    };
}