export const CreateRecipe = () => {
  //   name: 
  ingredients:
  instruction
  imageUrl
  cookingTime
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </form>
    </div>
  );
};
