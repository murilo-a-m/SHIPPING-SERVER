import { PrismaClient } from "@prisma/client";

import { User } from "../../../domain/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepositpory";

const prisma = new PrismaClient();

class UsersRepository implements IUsersRepository {
    async findByUserName(username: string) {
        const user = await prisma.user.findFirst({
            where: {
                username,
            },
        });
        return user;
    }
    list(): User[] {
        throw new Error("Method not implemented.");
    }
    async create({ username, password }: ICreateUserDTO) {
        const user = await prisma.user.create({
            data: {
                username,
                password,
                losses: 0,
                wins: 0,
            },
        });
        return user;
    }
}

export { UsersRepository };
