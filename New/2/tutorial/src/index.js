import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookS(){
    return (
        <section className="books" >
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}


    const Book = () => {
        return (
            <article className="book">
                <BookImage />
                <Title />
                <Author />
            </article>
        );
    }


const authorDesign = {
    color:'green',
    fontSize:'14px',
    letterSpacing:'10px'
}

const BookImage = () => {
	return <img src="https://m.media-amazon.com/images/I/51TNUIyRjoL._AC_UY218_ML3_.jpg" alt="F*ck I'm Bored! Activity Book For Adults" />
}

const Title = () => <h1 style={{fontSize:'20px',color:'red'}}>F*ck I'm Bored! Activity Book For Adults</h1>
const Author = () => <h2 style={authorDesign}>by Tamara L Adams</h2>

ReactDom.render(<BookS />,document.getElementById('root'));