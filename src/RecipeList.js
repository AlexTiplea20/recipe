import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    return (
        <div>
            {recipes.map((item, index) => (
                <RecipeCard key={index} recipe={item.recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
