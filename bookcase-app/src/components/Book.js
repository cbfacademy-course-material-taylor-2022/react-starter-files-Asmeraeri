import React from 'react';
 

const Book = (props) => {
return (
<div>
<h2>{props.book.volumeInfo.title}</h2>
const { id,
saleInfo: {retailPrice}, 
volumeInfo: { 
title, 
authors, 
description, 
imageLinks: {thumbnail}
}
} = props.book;

<div className="book">
<img src={thumbnail} alt={title}/>
 <div>
 <h2 title={title}>{title}</h2>
 </div>
</div>

</div>
 );
}
export default Book;