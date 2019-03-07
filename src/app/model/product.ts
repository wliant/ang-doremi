export class Product {
    id?: number;
    productCategory?: string;
    productTitle?: string;
    productAuthor?: string;
    yearOfPublication?: number;
    publisher?: string;
    unitPrice?: number;

    constructor(prod: any) {
        this.id = prod.id;
        this.productCategory = prod.productCategory;
        this.productTitle = prod.productTitle;
        this.productAuthor = prod.productAuthor;
        this.yearOfPublication = prod.yearOfPublication;
        this.publisher = prod.publisher;
        this.unitPrice = prod.unitPrice;

    }

    static parseList(prods: any) : Product[] {
        let result : Product[] = [];
        for(let prod of prods) {
            result.push(new Product(prod));
        }

        return result;
    }
}