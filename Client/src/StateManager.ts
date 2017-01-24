import {Blog} from "./models/Blog";
import {Promise} from "bluebird";
import {User} from "./models/User";
export class StateManager{ 
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
    ];

    currentUser:User = new User();

    /**
     *  Query for blog posts.
     *  returns Blog[]
     */
    getBlogs(whereClause?:string):Promise<Blog[]>{
        return Promise.resolve(this.blogs.sort((a:Blog, b:Blog)=>{return b.date.localeCompare(a.date)}));
    }

    /**
     * Get the currently logged in user.
     */
    getUser() : Promise<User>{
        return Promise.resolve(this.currentUser);
    }

}