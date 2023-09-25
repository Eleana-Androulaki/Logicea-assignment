import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mainApi from "../api/mainApi";
import CustomInput from "../components/CustomInput";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import baseUrl from "../api/baseUrl";
import CustomButton from "../components/CustomButton";


const inputs = [
    {
        name: 'title',
        label: 'Title',
        key: 'title'
    },
    {
        name: 'body',
        label: 'Body',
        key: 'body'
    },
    {
        name: 'author',
        label: 'Author',
        key: 'author'
    },
    {
        name: 'views',
        label: 'Views',
        key: 'views',
        type: 'number'
    },
    {
        name: 'createdAt',
        label: 'Created At',
        key: 'createdAt',
        type: 'date'
    },
]

const Joke = () => {
    const [joke, setJoke] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const [ model, setModel ] = useState({
        title: "",
        body: "",
        author: "",
        views: 0,
        createdAt: ''
    })
    const handleSubmit = async () => {
        const method = id ? 'put' : 'post';
        try {
            await mainApi[method](`/jokes/${id || ''}`, model)
        } catch (error) {
            console.error(error);
        } finally {
            navigate('/');
        }
    }
    const handleDelete = async () => {
        try {
            await axios({
                method: 'DELETE',
                url: baseUrl+'jokes/'+id,
            })
        } catch (error) {
            console.error(error);
        } finally {
            navigate('/');
        }
    }
    useEffect(() => {
        if(!joke && id) {
            const getJoke = async () => {
                try {
                  const response = await mainApi.get(`/jokes/${id}`)
                  setJoke(response.data)
                } catch (err) {
                  console.error(err)
                }
            }
          getJoke()
        } else if(joke && id) {
            setModel({
                title: joke.title || '',
                body: joke.body || '',
                author: joke.author || '',
                views: parseInt(joke.views || 0),
                createdAt: joke.createdAt 
                    ? new Date(joke.createdAt).toISOString().slice(0,10) 
                    : ''
            })
        }
    },[joke,id])

    return (
        <div className="flex flex-col w-full items-center justify-center">
            {
                inputs.map(({ name, label, key, type }, inpIdx) => {
                    return (
                        <CustomInput
                            key={inpIdx}
                            model={model}
                            setModel={setModel}
                            name={name}
                            label={label}
                            type={type}
                        />
                    )
                })
            }
            <div className="mt-20">
                <CustomButton
                    handleClick={handleSubmit}
                    classes="bg-green text-white mr-10"
                >
                    Submit
                </CustomButton>
                <CustomButton
                    handleClick={()=>navigate('/')}
                    classes="bg-blue text-white mr-10"
                >
                    Close
                </CustomButton>
                {joke && id &&
                    <CustomButton
                        handleClick={handleDelete}
                        classes="bg-red text-white"
                    >
                        Delete
                    </CustomButton>
                }
            </div>
        </div>
    )
}

export default Joke;