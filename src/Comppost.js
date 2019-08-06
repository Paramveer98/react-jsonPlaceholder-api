import React from 'react';

class Comppost extends React.Component{

  
componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Title New',
      body: 'Body New How are you hii',
      userId: 1,
      
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

render()
{
  console.log("this.json")
  return(
        <div>
        </div>
        )
}
} 

export default Comppost;