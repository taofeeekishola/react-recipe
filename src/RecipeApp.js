import {useEffect,useState} from 'react'
import axios from 'axios';

import Nav from './Recipe_Components/Nav'
import Banner from './Recipe_Components/Banner'
import List from './Recipe_Components/List'
import Footer from './Recipe_Components/Footer'
import Copy from './Recipe_Components/Copy'



const RecipeApp = () =>{

    const [loading,setLoading] = useState(true); //keeping track of the loading state
    const [error,setError] = useState(false); // keeping track of the errors we encounter while calling the api
    const [recipes,setRecips] = useState([]); // storing the data from the api as we are getting it, storing the initial value to empty
    const [frecipes,setFrecips] = useState([]); 
    const[keyword,setKeyWord] = useState('');

    useEffect(() => {
        makeApiCall()
    },[])

    //function to handle filtering on the page using the name
    const handleFiler = () => {
        const filteredRecips = recipes.filter((recipe) =>{
            return recipe.name.toLowerCase().includes(keyword.toLowerCase())
        })
        
        setFrecips(filteredRecips)
    }


    const makeApiCall = () =>{
        axios.get("https://dummyjson.com/recipes")
        .then(function(resp){
            console.log(resp.data.recipes)
            setLoading(false);
            setRecips(resp.data.recipes)
        })
        .catch(function(err){
            console.log(err)
            setError(true)
            setLoading(false)
        })
    }

    return (
        <div className="container fluid" >
            <Nav/>
            <Banner setKeyWord={setKeyWord} keyword={keyword} handleFiler={handleFiler} />
            <List loading={loading} error={error} recipes={recipes} frecipes={frecipes} keyword={keyword} />
            <Footer/>
            <Copy/>
        </div>
    )
}

export default RecipeApp