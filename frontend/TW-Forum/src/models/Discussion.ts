import { Comment } from "./Comment";

export interface Discussion{
    discussion_id:number;
    user_id:number;
    tag_id:number;
    title:string;
    description:string;
    comments:Comment[]
    username:string

    /*
    constructor(discussion_id:number,tag_id:number,title:string,content:string,comments:Comment[]){
        this.discussion_id=discussion_id
        this.tag_id=tag_id
        this.title=title
        this.content=content
        this.comments=comments
    }
    */
}