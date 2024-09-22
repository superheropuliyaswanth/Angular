
export class Product {


    constructor(
        public id: string = "0",
        public name: string = '',
        public price: number = 100,
        public description: string = '',
        public inStock: boolean = true,
        public imagePath: string = '',
    ) {

    }


}
