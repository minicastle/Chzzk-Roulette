import { Prize } from "./donation"

interface Streamer{
    hostLink:string,
    key:string,
    nickName:string
}
interface User{
    nickName:string,
    id:string,
    prize:Prize[]
}

export type {Streamer,User}