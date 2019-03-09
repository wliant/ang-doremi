import { Product } from '../model/product';

export class RestockRequest {
    id: number;
    product: Product;
    quantity: number;

    constructor(restockRe: any) {
        this.id = restockRe.id;
        this.product = restockRe.product;
        this.quantity = restockRe.quantity;
          }

    static parseList(restockRes: any) {
        let result : RestockRequest[] = [];
        for(let restockRe of restockRes) {
            result.push(new RestockRequest(restockRe));
        }
        return result;
    }
}
