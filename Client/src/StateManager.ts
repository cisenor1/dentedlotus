import {Blog} from "./models/Blog";
export class StateManager{
    currentUser;
    nextRace;
    
    blogs:Blog[] = [
        {
                author:"Craig",
                date: "Sept. 33rd",
                message: "Today shouldn't exist!",
                title: "but Why!?"
        },
        {
            author:"Derrick",
            date: "Sept. 34th",
            message:"What have we done?!",
            title: "SEPTEMBER!!!"
        }
    ]

    getBlogs():Blog[]{
        return this.blogs.sort((a:Blog, b:Blog)=>{return b.date.localeCompare(a.date)});
    }

}