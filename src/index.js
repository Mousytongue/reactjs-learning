import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import CollectionOfGenreLists from './NetflixClone';


const TESTLINKS = [
    {genre: 'Classic Rock', author: 'Led Zeppelin', title: 'Stairway to Heaven', link: 'https://www.youtube.com/watch?v=X791IzOwt3Q'},
    {genre: 'Classic Rock', author: 'Led Zeppelin', title: 'Kashmir', link: 'https://www.youtube.com/watch?v=tzVJPgCn-Z8'},
    {genre: 'Alternative', author: 'Siames', title: 'Mr Fear', link: 'https://www.youtube.com/watch?v=EKLWC93nvAU'},
    {genre: 'Alternative', author: 'Siames', title: 'Summer Nights', link: 'https://www.youtube.com/watch?v=hM7Eh0gGNKA'},
    {genre: 'Alternative', author: 'Siames', title: 'The Wolf', link: 'https://www.youtube.com/watch?v=lX44CAz-JhU'}
];

ReactDOM.render(
    <CollectionOfGenreLists testlinks={TESTLINKS}/>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


