export class Quoteclass {

    showDescription:boolean;
    constructor(
        public Quote: string, 
        public author: string,
        public iSubmit: string,
        
        public upVote:number,
        public downVote:number,
        public submitDate: Date
    ){
        this.showDescription =false;
    }
}
