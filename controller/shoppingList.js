import ShoppingList from "../model/shoppingModel.js"; // Importing ShoppingList schema

// Create a new shopping list
export const createShoppingList = async (req, res) => {
    const { name, description, items } = req.body;

    try {
        const shoppingList = new ShoppingList({
            userId: req.user.id, // Ensure you have user ID from JWT token or session
            name,
            description,
            items, // Assuming `items` is an array of objects with `itemName` and `quantity`
        });

        await shoppingList.save();
        res.status(201).json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: "Error creating shopping list", error: error.message });
    }
};

// Update an existing shopping list
export const updateShoppingList = async (req, res) => {
    const { id } = req.params; // Shopping List ID to be updated from router
    const { name, description, items } = req.body; // New shopping list data

    try {
        // Find shopping list by ID and ensure it belongs to the logged-in user
        const shoppingList = await ShoppingList.findOne({ userId: req.user.id, _id: id });

        if (!shoppingList) {
            return res.status(404).json({ message: "Shopping list not found" });
        }

        // Update the fields
        shoppingList.name = name || shoppingList.name;
        shoppingList.description = description || shoppingList.description;
        shoppingList.items = items || shoppingList.items; // If provided, update items

        await shoppingList.save();
        res.json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: "Error updating shopping list", error: error.message });
    }
};

// Delete a shopping list
export const deleteShoppingList = async (req, res) => {
    const { id } = req.params; // Shopping List ID to be deleted

    try {
        // Find shopping list by ID and ensure it belongs to the logged-in user
        const shoppingList = await ShoppingList.findOne({ userId: req.user.id, _id: id });

        if (!shoppingList) {
            return res.status(404).json({ message: "Shopping list not found" });
        }

        // Remove the shopping list from the database
        await shoppingList.deleteOne();
        res.json({ message: "Shopping list deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting shopping list", error: error.message });
    }
};

export const getAllShoppingLists = async (req, res) => {
    try {
        // Fetch all shopping lists belonging to the logged-in user
        const shoppingLists = await ShoppingList.find({ userId: req.user.id });

        if (!shoppingLists.length) {
            return res.status(404).json({ message: "No shopping lists found" });
        }

        res.json(shoppingLists);
    } catch (error) {
        res.status(500).json({ message: "Error fetching shopping lists", error: error.message });
    }
};

