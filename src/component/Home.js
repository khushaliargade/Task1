import { useState } from 'react';
function Home() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [searchInfo, setSearchInfo] = useState({});

    const handleSearch = async e => {
        e.preventDefault();
        if (search === '') return;     // if we dont search anything inside input throw an error

        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
        const response = await fetch(endpoint);
        console.log(response);

        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);
        setResults(json.query.search);
        setSearchInfo(json.query.searchinfo);
    }

    return (
        <div className="App">
            <header>
                <h1>wiki seeker</h1>
                <form className="search-box " >

                    <input type="search" placeholder="what are you looking for?"
                        value={search}
                        onChange={e => setSearch(e.target.value)
                        }
                    />
                    <button className='button' onClick={handleSearch}>Submit</button>
                </form>
                {(searchInfo.totalhits) ? <p>search results: {searchInfo.totalhits}</p> : ''}
            </header>
            <div className="results">
                {results.map((result, i) => {
                    const url = `https://en.wikipedia.org/?curid=${result.pageid}`;


                    return (
                        <div className="result" key={i}>
                            <h3>{result.title}</h3>
                            <p dangerouslySetInnerHTML={{
                                __html: result.snippet
                            }} ></p>
                            <a href={url} target="_blank" rel="nofollow">Read More</a>


                        </div>
                    )
                })}

            </div>
        </div>

    );
}

export default Home;

