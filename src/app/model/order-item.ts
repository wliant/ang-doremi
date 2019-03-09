import { Product } from './product';

const modelName = "com.thesundaylunatics.model.OrderLineItem";
export class OrderItem {
    id?: number;
    product?: Product;
    quantity?: number;
    value?: number;

    constructor(oi: any) {
        if(oi && oi[modelName]) {
            oi = oi[modelName];
        }
        this.id = oi.id;
        if(oi.product) {
            this.product = new Product(oi.product);
        }
        this.quantity = 0;
        this.value = 0;

        if(oi.quantity) {
            this.quantity = oi.quantity;
        } 
        if(oi.value) {
            this.value = oi.value;
        }
    }

    static parseList(ois: any) {
        let result : OrderItem[] = [];
        if(ois) {
            for(let oi of ois) {
                result.push(new OrderItem(oi));
            }
        }
        return result;
    }

}