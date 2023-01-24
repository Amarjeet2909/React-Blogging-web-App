import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // creating list array for displaying it | there should be one unique id in each element 
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Hey it is eg body', author: 'amarjeet', id: 1},
        {title: 'Welcome ji', body: 'Hey it is eg body', author: 'aayush', id: 2},
        {title: 'web dev blog', body: 'Hey it is eg body', author: 'amisha', id: 3}
    ]);

    // using useState we can make reactive variable
  /*  const [name, setName] = useState('Amisha');
    const [ age, setAge ] = useState(20);

    const handleClick = () => {
        setName('Swati');
        setAge(21);
    }   */

  /*  const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    } 
  */

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"></BlogList>
        </div>
    );
}

export default Home;