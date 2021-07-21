import { IUser } from "./types";

export function addNewUser(user: IUser) {
    return {
        type: "ADD_USER",
        // payload: informacoes que vao ser carregadas atraves da action
        payload: {
            user
        }
    }
}