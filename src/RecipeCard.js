import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} />
            <p>{recipe.source}</p>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </div>
    );
};

export default RecipeCard;
