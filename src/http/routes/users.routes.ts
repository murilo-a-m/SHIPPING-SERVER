import { Router } from "express";

import { createUserController } from "../controllers/createUser";
import { addDefeatController } from "../controllers/defeats";
import { loginUserController } from "../controllers/LoginUser";
import { addWinController } from "../controllers/wins";

const usersRoutes = Router();

usersRoutes.post("/", async (request, response) => {
    await createUserController.handle(request, response);
});

usersRoutes.post("/login", async (request, response) => {
    await loginUserController.handle(request, response);
});

usersRoutes.post("/wins/:username", async (request, response) => {
    await addWinController.handle(request, response);
});

usersRoutes.post("/defeats/:username", async (request, response) => {
    await addDefeatController.handle(request, response);
});

export { usersRoutes };
