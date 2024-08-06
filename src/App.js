import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';

const App = () => {
    const [recipes, setRecipes] = useState([]);

    const searchRecipes = async (query) => {
        const appId = '748cd7f2'; // Replace with your Edamam App ID
        const appKey = '5fe8ba39521187286015b7076ebd3326'; // Replace with your Edamam App Key
        const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

        try {
            const response = await axios.get(url);
            setRecipes(response.data.hits);
        } catch (error) {
            console.error("Error fetching the recipes", error);
        }
    };

    return (
        <div>
            <h1>Recipe Finder</h1>
            <SearchForm onSearch={searchRecipes} />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;
