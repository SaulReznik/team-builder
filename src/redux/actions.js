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