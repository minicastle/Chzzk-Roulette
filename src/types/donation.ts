interface Prize{
    orderPrice:number,
    targetRoulette:string,
    targetData:object[],
    orderNick:string,
    orderId:string,
    prize:string,
    desc:string
}
interface dataSet{
    value:string,
    percent:number,
    desc:string,
    fontColor?:string,
    borderColor?:string
}
export type {Prize,dataSet}