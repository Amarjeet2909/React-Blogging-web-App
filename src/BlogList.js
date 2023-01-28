// this file is a seperate component used for dispalying the list array
/* .map is a JS function for iterating through the list array */

const BlogList = ({ blogs, title, handleDelete}) => {
    return (
        <div className="blog-list">
             <h2>{ title }</h2>
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList