import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Person = ({img,name,designation,children}) => {
    const imgUrl = `https://source.unsplash.com/500x500/?${img}`;
    return(
        <article className="person">
            <img src= {imgUrl}/>
            <h2>{name}</h2>
            <h2>{designation}</h2>
            {children}
        </article>
    );
};

const PersonList = () =>{
   return(
       <section className="person-list">
           <Person
            name="john"
            designation="developer"
            img="demo profile gif 1">
               <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
           </Person>

           <Person
               name="john"
               designation="designer"
               img="demo profile gif 2">

           </Person>

           <Person
               name="john"
               designation="seo"
               img="demo profile gif 3">
               <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
           </Person>

       </section>
   );
};

ReactDOM.render(<PersonList />, document.getElementById('root'));
