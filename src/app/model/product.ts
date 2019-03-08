export class Product {
    id: number;
    productCategory: string;
    productTitle: string;
    productAuthor: string;
    yearOfPublication: number;
    publisher: string;
    availableInventory: number;
    unitPrice: number;
    productDemand: string;
    serviceLevel: string;
    supplierLeadTime: string;
    stockLevel: string;


    constructor(prod: any) {
        this.id = prod.id;
        this.productCategory = prod.productCategory;
        this.productTitle = prod.productTitle;
        this.productAuthor = prod.productAuthor;
        this.yearOfPublication = prod.yearOfPublication;
        this.publisher = prod.publisher;
        this.unitPrice = prod.unitPrice;
        this.productDemand = prod.productDemand;
        this.serviceLevel = prod.serviceLevel;
        this.supplierLeadTime = prod.supplierLeadTime;
        this.stockLevel = prod.stockLevel;
        this.availableInventory = prod.availableInventory;

    }

    static parseList(prods: any) {
        let result : Product[] = [];
        for(let prod of prods) {
            result.push(new Product(prod));
        }
        return result;
    }
}
