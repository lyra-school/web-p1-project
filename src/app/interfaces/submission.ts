export interface ISubmission {
    _id:string;
    name:string;
    author:string;
    imageURL:string;
}

export class CreatedSubmission implements ISubmission {
    _id!:string;
    name:string;
    author:string;
    imageURL:string;

    constructor(name:string,author:string,imageURL:string) {
        this.name = name;
        this.author = author;
        this.imageURL = imageURL;
    }
}