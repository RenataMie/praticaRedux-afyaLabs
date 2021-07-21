export interface IUser {
    id?: number;
    name: string;
    age: string;
    email: string
}

export interface IGlobalState{
    users: IUser[]
}