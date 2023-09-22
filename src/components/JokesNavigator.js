import React from "react";

const JokesNavigator = ({page, setPage, limit, setLimit}) => {

    return (
        <div className="flex flex-row mt-10 mx-auto">
            <select className="
                bg-secondary 
                border 
                border-gray-300 
                text-primary 
                block 
                w-full 
                rounded-lg
                p-3 
            "
                onChange={(e) => setLimit(e.target.value)}
                value={limit}
            >
                <option>5</option>
                <option>10</option>
            </select>
            <nav className="ml-10">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <button 
                            className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-primary bg-secondary border border-gray-300 rounded-l-lg ${page===1 ? 'opacity-60' : ''}`}
                            onClick={()=>setPage(page-1)}
                            disabled={page===1}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button 
                            className="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-secondary border border-gray-300 rounded-r-lg"
                            onClick={()=>setPage(page+1)}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default JokesNavigator;