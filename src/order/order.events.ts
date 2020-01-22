export class OrderEvent {
    constructor(
        public readonly orderTransactionGUID: string,
        public readonly orderUser: string,
        public readonly orderItem: string,
        public readonly orderAmount: number,
    ) { }
}

// tslint:disable-next-line:max-classes-per-file
export class OrderEventSuccess {
    constructor(
        public readonly orderTransactionGUID: string,
        public readonly orderItem: string,
        public readonly orderAmount: number,
        public readonly user: { email: string, id: string },
    ) { }
}

// tslint:disable-next-line:max-classes-per-file
export class OrderEventFail {
    constructor(
        public readonly orderTransactionGUID: string,
        public readonly error: object,
    ) { }
}