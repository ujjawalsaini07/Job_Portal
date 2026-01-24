import e from "express";

import {
    getUsers,
    getUsersbyId,
    activateUser,
    deactivateUser,
    deleteUser,
} from "../controllers/user.controller.js";

const userRouter = e.Router();

userRouter.get("/" getUsers);
userRouter.get("/:id" getUsersbyId);
userRouter.patch("/:id/activate" activateUser);
userRouter.patch("/:id/deactivate" deactivateUser);
userRouter.delete("/:id" deleteUser);



export default userRouter;

