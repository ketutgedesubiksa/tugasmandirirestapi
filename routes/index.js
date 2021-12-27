import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif, deleteNotif } from "../controllers/notificationController.js";
const router = express.Router();
//get All
router.get('/', getNotifs);
//post Create
router.post('/', saveNotif);
//Get By ID
router.get('/:id', getNotifID);
//Update
router.patch('/:id',updateNotif);
//delete
router.delete('/:id',deleteNotif);
export default router;