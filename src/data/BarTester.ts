import { dataSet } from "../types/donation";
import { User } from "../types/user";

export const barTesterData:dataSet[] = [
    {value:"40%",percent:40,desc:'40 퍼센트 상품에 당첨',fontColor:'white'},
    {value:"30%",percent:30,desc:'30 퍼센트 상품에 당첨',fontColor:'white'},
    {value:"20%",percent:20,desc:'20 퍼센트 상품에 당첨',fontColor:'white'},
    {value:"5%",percent:5,desc:'5 퍼센트 상품에 당첨',fontColor:'green',backgroundColor:'white'},
    {value:"4%",percent:4,desc:'4 퍼센트 상품에 당첨',fontColor:'blue',backgroundColor:'white'},
    {value:"1%",percent:1,desc:'어캐했지',fontColor:'red',backgroundColor:'white'},
];
export const barTesterUserData:User={
    nickName:'작은성',
    id:'3846bdef9a759e399977914b234ad8d6',
    prize:[]
}