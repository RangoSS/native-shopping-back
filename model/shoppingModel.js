import mongoose from "mongoose";

// Define ShoppingList schema
const ShoppingListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
  name: { type: String, required: true },
  description: { type: String, required: true },
  items: [
    {
      itemName: { type: String, required: true },  // Name of the item
      quantity: { type: Number, required: true },  // Quantity of the item
    }
  ],
  dateCreated: { type: Date, default: Date.now },
});

// Create ShoppingList model
const ShoppingList = mongoose.model("Shopping-list", ShoppingListSchema);

export default ShoppingList;
