export function companiesHaveError(state = false, action) {
    switch (action.type) {
        case 'COMPANIES_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function companiesAreLoading(state = false, action) {
    switch (action.type) {
        case 'COMPANIES_ARE_LOADING':
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