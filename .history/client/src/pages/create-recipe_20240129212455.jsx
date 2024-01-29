import { useState } from "react";
export const CreateRecipe = () => {
  //   name:
  // ingredients:
  // instruction:
  // imageUrl:
  // cookingTime:
  // userOwner:
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instruction: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });

  //简化了每一个需要的步骤，对应name和value直接替换
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, [name]: value });
  };
  const addIngredient = () => {
    //添加成分
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, idx) => (
          <input
            key={idx}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={handleIngredientChange}
          />
        ))}
        //按钮按了之后进行处理 弹出框
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions"></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" name="imageUrl" />
        <label htmlFor="cookingTime">Cooking times within minutes</label>
        <input type="number" id="cookingTime" name="cookingTime" />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};
