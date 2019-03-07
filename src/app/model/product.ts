export class Product {
    id: number;
    productCategory: string;
    productTitle: string;
    productAuthor: string;
    yearOfPublication: number;
    publisher: string;
    unitPrice: number;


    constructor(prod: any) {
        this.id = prod.id;
        this.productCategory = prod.productCategory;
        this.productTitle = prod.productTitle;
        this.productAuthor = prod.productAuthor;
        this.yearOfPublication = prod.yearOfPublication;
        this.publisher = prod.publisher;
        this.unitPrice = prod.unitPrice;

    }
}
