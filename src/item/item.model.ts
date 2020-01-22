import { AggregateRoot } from '@nestjs/cqrs';

import { IItemInterface } from './item.interface';
import { OrderEventSuccess, OrderEventFail } from 'src/order/order.events';

export class ItemModel extends AggregateRoot {
    constructor(private readonly item: IItemInterface) {
        super();
    }

    orderOnItem(orderTransactionGUID: string, userID: string, amount: number) {
        // validation and etc.
        try {

            // business logic
            // upon successful order, dispatch new event
            this.apply(new OrderEventSuccess(orderTransactionGUID, this.item.id, amount, { email: 'fake@email.com', id: userID }));

        } catch (e) {

            // dispatch order event fail action
            this.apply(new OrderEventFail(orderTransactionGUID, e));
        }
    }
}