import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { OrderCommand } from './order.command';
import { ItemRepository } from 'src/item/item.repository';

@CommandHandler(OrderCommand)
export class OrderHandler implements ICommandHandler<OrderCommand> {
  constructor(
    private readonly itemRepository: ItemRepository,
    private readonly publisher: EventPublisher) {}

  async execute(command: OrderCommand) {

    const { orderTransactionGUID , orderAmount, orderItem, orderUserGUID } = command;

    // tslint:disable-next-line:no-console
    console.log(`Make a bid on ${orderItem}, with userID: ${orderUserGUID} amount: ${orderAmount}`);

    // to associate model ( Order ) and publisher, we use code bellow
    const item = this.publisher.mergeObjectContext(
      await this.itemRepository.getItemById(orderItem),
    );

    item.orderOnItem(orderTransactionGUID, orderUserGUID, orderAmount);
    item.commit();
  }

}