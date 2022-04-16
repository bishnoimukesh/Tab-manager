import './Search.css';
const Search = () => {
    return (
        <form action="https://www.google.com/search" method="get" 
        name="searchform" className="searchform">
            <input type="text" autoComplete="on" className="search-input" placeholder="Google Search" name="q"/>
            <button className="search-btn" type="submit">
                <i className="fa fa-search search-icon"></i>
            </button>
        </form>
    )
}

export {Search};