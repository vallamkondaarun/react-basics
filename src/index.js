import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {data} from './books'
import SpecificBook from './Book'
import Reminder from './Reminder';
import {Laptops} from './Laptops';

function BookList() {
  return (
    <>
    <Laptops/>
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
    <Reminder/>
    </>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));