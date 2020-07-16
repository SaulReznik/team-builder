// --------------------Companies actions---------------//

export function companiesHaveError(bool) {
    return {
        type: 'COMPANIES_HAVE_ERROR',
        hasError: bool
    };
}

export function companiesAreLoading(bool) {
    return {
        type: 'COMPANIES_ARE_LOADING',
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
        dispatch(companiesAreLoading(true));

        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(companiesAreLoading(false));
                return response;
            })
            .then(response => response.json())
            .then((json) => dispatch(companiesFetchDataSuccess(json)))
            .catch(() => dispatch(companiesHaveError(true)));
    };
}
