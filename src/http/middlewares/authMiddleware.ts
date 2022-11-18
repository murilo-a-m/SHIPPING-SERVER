import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { Unauthorized } from "../../infrastructure/server/Response";

interface ITokerPayload {
    id: string;
    iat: number;
    expo: number;
}

export function authMidleware(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { authorization } = request.headers;

    if (!authorization) {
        return Unauthorized({ message: "not found", data: {} });
    }

    const token = authorization.replace("Bearer", "").trim();

    try {
        const data = jwt.verify(token, "secret");
        const { id } = data as ITokerPayload;

        request.username = id;
    } catch {
        response.sendStatus(401);
    }
}
