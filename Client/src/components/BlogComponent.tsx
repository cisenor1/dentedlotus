import * as React from "react";
import { Blog } from "../models/Blog";
export interface BlogProps {
    blogs: Blog[]
}

export class BlogComponent extends React.Component<BlogProps, undefined>{
    /**
     *
     */
    constructor(props: BlogProps) {
        super(props);

    }

    render() {
        let out = [];
        this.props.blogs.forEach((blog) => {
            out.push(
                <li className="blog-entry">
                    <div>
                        <div className="date">{blog.date}</div>
                        <div className="title">{blog.title}</div>
                        <div className="message">{blog.message}</div>
                        <div className="author">{blog.author}</div>
                    </div>
                </li>
            );
        });
        return <ul>{out}</ul>;
    }
}