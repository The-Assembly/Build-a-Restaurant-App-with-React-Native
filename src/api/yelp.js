import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer qrjq3kPh_ws9v146U9fAiXAompAbW3GFITHQTScOvTYffaQJdDa8so4amZAWuVa2NNf0TojaJGomg2Vc40taA5bcx1gkRhWW64gPuM0BFo4iPZXIqoMtaBvCdjmcXnYx'
        
    }
})

// yelp.get('/search')