import React from 'react';

class Compget extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            posts : [],      
        };

    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( response => { return response.json()})
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result,
                });
                console.log(this.state.posts);
            }
        )
    }

    render() {
        const {isLoaded, posts} = this.state;
       if (!isLoaded) {
            return <div className="loading">Loading ...</div>
        }else{
            return(
                <div>
                    <ol className="item" type="i">
                    {
                        posts.map(post => (                        
                            <li align="start">
                                <div>
                                    <p className="title">{post.title}</p>
                                    <p className="body">{post.body}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }


export default Compget;

// ComponentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))
// }




//   render() {
//     return (
//       <div>

//         {this.ComponentDidMount()}

//       </div>
//     )
//   }
