import { connect } from 'react-redux';
import { SearchForm } from '../components/searchForm';
import { SearchResults } from '../components/searchResults';

const OMDB_KEY = "a67275ce";

const fetchSearch = (searchQuery, page) => (
    fetch(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${searchQuery}&type=movie&page=${page}`)
            .then( res => ( res.json() ) )
)

const MapStateToProps = state => {
    return {
        searchQuery: state.searchQuery,
        usedSearch: state.usedSearch,
        results: state.results,
        page: state.page
    }
}

const MapDispatchToProps = dispatch => {
    return {
        setQuery: (query) => {
            let searchQuery = query.target.value;

            if( searchQuery === "" ){
                dispatch({
                    type: "CLEAR_SEARCH"
                })
            }else{
                dispatch({
                    type: "SET_QUERY",
                    searchQuery
                })
            }
        },
        doSearch: (query, page) => {
            fetchSearch(query, page).then( results => dispatch({
                type: "DO_SEARCH",
                results: results.Search || []
            }))
        },
        nextPage: (query, page) => {
            page++

            fetchSearch(query, page).then( results => dispatch({
                type: "NEXT_PAGE",
                results: results,
                page: page
            }))
        },
    }
}

const createConnection = connect(
    MapStateToProps,
    MapDispatchToProps
)

const Search = createConnection(SearchForm);
const Results = createConnection(SearchResults);

export {
    Search,
    Results
}