import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')


    // Getting the values from api
    const searchApi = async (searchTerm)=>{
        try{
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'San Jose'
                }
            })
            setResults(response.data.businesses)
        } catch(err){
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}