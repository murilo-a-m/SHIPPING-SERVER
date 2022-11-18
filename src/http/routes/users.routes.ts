import { Router } from "express";

import { createUserController } from "../controllers/createUser";
import { loginUserController } from "../controllers/LoginUser";
import { authMidleware } from "../middlewares/authMiddleware";

const usersRoutes = Router();

usersRoutes.post("/", async (request, response) => {
    await createUserController.handle(request, response);
});

usersRoutes.post("/login", async (request, response) => {
    await loginUserController.handle(request, response);
});

usersRoutes.get("/auth", authMidleware, async (request, response) => {
    console.log("tetinha");
});

export { usersRoutes };
