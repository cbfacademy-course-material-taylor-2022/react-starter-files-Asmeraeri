import React from 'react';


   function Book (props){
    const { id,
        saleInfo: {retailPrice}, 
        volumeInfo: { 
        title, 
        authors, 
        description, 
        imageLinks: {thumbnail}
        }
        } = props.book;
        
     return (
      
        
    <div>
      <h2>{title}</h2>
      <div className="book">
           <img src={thumbnail} alt={title}/>
       </div>
     <p>by 
       {
      authors ?
       authors.join(', '):
    "No Authors Listed"
    }
   </p>
     <p><strong>{ retailPrice && "£" + retailPrice.amount }</strong></p>
     <button onClick={()=> props.addBook (title)}>  Add +  </button> 

</div>
 );
}
Book.defaultProps = {
    saleInfo : {
   retailPrice : {
   amount: 'No price provided'
   }
   }
   };
export default Book;