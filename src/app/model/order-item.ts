import { Product } from './product';

export class OrderItem {
    id?: number;
    product?: Product;
    quantity?: number;
    value?: number;

    constructor(oi: any) {
        this.id = oi.id;
        if(oi.product) {
            this.product = new Product(oi.product);
        }
        this.quantity = oi.quantity;
        this.value = oi.value;
    }

    static parseList(ois: any) {
        let result : OrderItem[] = [];
        for(let oi of ois) {
            result.push(new OrderItem(oi));
        }
        return result;
    }

}