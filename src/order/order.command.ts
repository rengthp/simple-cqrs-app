export class OrderCommand {
    constructor(
        public readonly orderTransactionGUID: string,
        public readonly orderUserGUID: string,
        public readonly orderItem: string,
        public readonly orderAmount: number,
    ) { }
}