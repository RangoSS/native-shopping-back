import express from "express";
//import { addItem, getItems } from "../controllers/itemController.js";
import {registerUser,loginUser} from "../controller/userController.js"
import {createShoppingList,updateShoppingList,deleteShoppingList,getAllShoppingLists} from "../controller/shoppingList.js"
import {getUserProfile ,updateUserProfile,deleteUserProfile} from "../controller/profileController.js"
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/shopping",protect, createShoppingList);
router.put("/shopping/:id",protect, updateShoppingList);
router.delete("/shopping/:id",protect, deleteShoppingList);
router.get("/shopping",protect, getAllShoppingLists);
router.get("/user",protect, getUserProfile);
router.put("/user/:id",protect, updateUserProfile);
router.delete("/user/:id",protect, deleteUserProfile);




export default router;
