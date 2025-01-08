interface Prize{
    orderPrice:number,
    targetRoulette:string,
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
    backgroundColor?:string
}
export type {Prize,dataSet}