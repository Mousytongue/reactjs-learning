import React from "react";
//import db from './config';

// function PullFromFireStore(props){
//     const dbdata = [];

//     let rootRef = db.collection('Song');

//     let classicRef = rootRef.where('Genre', '==', 'Classic Rock').get()
//         .then(snapshot => {
//             if (snapshot.empty){
//                 console.log("Query returned empty");
//             }
//             snapshot.forEach(doc => {
//                 console.log(doc.id, '=>', doc.data());
//             });
//         });

//     return classicRef;
// }

// class FirebaseDB extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             songs: [],
//         };
//         console.log("database called");
//     }

//     componentDidMount(){
//         db.ref('/Song').on('value', querySnapShot => {
//             let data = querySnapShot.val() ? querySnapShot.val() : {};
//             this.setState({
//                 songs: data,
//             });
//         })
//         console.log("database called" + this.state.songs);
//     }
//     render(){
//         console.log("database called" + this.state.songs);
//         return (
            
//                 this.state.songs
//         );
//     }
// }

class ClickableLink extends React.Component{
    constructor(){
        super();
        this.begin = this.click.bind(this);
    }
    click(){
        console.log("click link: " + this.props.link);
    }

    render(){
        const title = this.props.title;
        var link = this.props.link;       

        //console.log("Reached ClickableLink");
        return (
            <button onClick={() => this.click(
                link={link}
            )}>
                {title}
            </button>
        );
    }  
}

class ScrollingGenreList extends React.Component{
    render() {
        const links = [];
        let thisGenre = this.props.genre;

        this.props.testlinks.forEach((testlink) => {
            if(testlink.genre === thisGenre){
                links.push(
                    <ClickableLink 
                    title={testlink.title}
                    link={testlink.link}
                    key={testlink.link} />
                );
            }
        });

        return (
            <tr>
                <td>{links}</td>
            </tr>
        );
    }
}

class CollectionOfGenreLists extends React.Component{
    render(){
        //console.log("Reached CollectionOfGenreLists");
        const rows = [];
        let lastGenre = null;

        this.props.testlinks.forEach((testlink) => {
            if (testlink.genre !== lastGenre){
                rows.push(                   
                    <ScrollingGenreList 
                    testlinks={this.props.testlinks}
                    genre={testlink.genre}
                    key={testlink.link} />
                    
                );
            }
            lastGenre = testlink.genre;
        });

        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default CollectionOfGenreLists;