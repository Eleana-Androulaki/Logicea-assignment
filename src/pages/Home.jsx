import React, { useEffect, useState } from "react";
import moment from 'moment';
import JokesNavigator from "../components/JokesNavigator";
import mainApi from "../api/mainApi";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CustomButton from "../components/CustomButton";

const headers = [
    'Title',
    'Author',
    'Created Date',
    'Views'
]

const viewColor = [
    {
        max: 25,
        class:'text-tomato'
    },
    {
        max: 50,
        class:'text-orange'
    },
    {
        max: 75,
        class:'text-yellow'
    },
    {
        max: 100,
        class:'text-green'
    }
]

const Home = () => {
    const [ page, setPage ] = useState(1);
    const [ limit, setLimit ] = useState(5);
    const [ jokes, setJokes ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getJokes = async (page=1,limit=5) => {
              try {
                const response = await mainApi.get(`/jokes?_page=${page}&_limit=${limit}`)
                setJokes(response.data)
              } catch (err) {
                console.error(err)
              }
          }
        getJokes(page,limit)
    },[page,limit])

    return (
        <React.Fragment>
            <div className="flex flex-wrap w-full text-left">
                {
                    headers.map((header,idx) => (
                        <div key={idx} className="w-1/4 font-bold mb-5 px-5">
                            {header}
                        </div>
                    ))
                }
                {
                    jokes?.map(({author, createdAt = null,  id, title, views}) => {
                        return (
                            <React.Fragment key={id}>
                                <div className="w-1/4 border-r border-primary px-5">
                                    <Link to={`/joke/${id}`}>{title}</Link>
                                </div>
                                <div className="w-1/4 border-r border-primary px-5">
                                    {
                                        author.substring(0,author.indexOf('@')+1)+'***'+author.substring(author.indexOf('.'))
                                    }
                                </div>
                                <div className="w-1/4 border-r border-primary px-5">
                                    { createdAt ? moment(createdAt).format('DD MMM YYYY') : '-'}
                                </div>
                                <div className="w-1/4 px-5">
                                    <span className={
                                        viewColor.find(({max}) => 
                                            parseInt(views) <= max)?.class || 'text-primary'
                                        }
                                    >
                                        {views}
                                    </span>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
                <JokesNavigator 
                    page={page}
                    setPage={setPage}
                    limit={limit}
                    setLimit={setLimit}
                />
                <div className="w-full mt-20">
                    <CustomButton
                        handleClick={ ()=>navigate('/joke')}
                        classes="bg-green text-white"
                    >
                        Add Joke
                    </CustomButton>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;