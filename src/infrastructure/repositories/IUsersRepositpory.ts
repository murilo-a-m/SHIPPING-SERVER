import { User } from "../model/User";

interface ICreateUserDTO {
    username: string;
    password: string;
}

interface IUsersRepository {
    findByUserName(name: string);
    list(): User[];
    create({ username, password }: ICreateUserDTO): void;
}

export { IUsersRepository, ICreateUserDTO };
