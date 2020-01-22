import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { OrderEvent, OrderEventSuccess, OrderEventFail } from './order.events';
import { OrderCommand } from './order.command';

@Injectable()
export class OrderSaga {

    @Saga()
    createOrder = (events$: Observable<any>): Observable<ICommand> => {
        return events$.pipe(
            ofType(OrderEvent),
            map((event: OrderEvent) => {
              
                return new OrderCommand(event.orderTransactionGUID, event.orderUser, event.orderItem, event.orderAmount);
            }),
        );
    }

    @Saga()
    createOrderSuccess = (events$: Observable<any>): Observable<ICommand> => {
        return events$.pipe(
            ofType(OrderEventSuccess),
            flatMap((event: OrderEventSuccess) => {

                // tslint:disable-next-line:no-console
                console.log('Order Placed')
                return [];
            }),
        );
    }

    @Saga()
    createOrderFail = (events$: Observable<any>): Observable<ICommand> => {
        return events$.pipe(
            ofType(OrderEventFail),
            flatMap((event: OrderEventFail) => {

                // tslint:disable-next-line:no-console
                console.log('Order Placing Failed')
                return [];
            }),
        );
    }

}