// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';

const init = () => {
  console.warn('YOU ARE UP AND RUNNING!');

  // axios.get('https://official-joke-api.appspot.com/random_joke')
  //   .then((response) => console.warn(response.data));

  // fetch('https://official-joke-api.appspot.com/random_joke')
  //   .then((response) => response.json())
  //   .then((resp) => console.log(resp));

  resolveAfter2Seconds = () => {
    return fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((resp) => resp);
  }
  
  document.querySelector('#app').addEventListener('click', async () => {
    document.querySelector('#punchline').innerHTML = 'Get Punchline';
    const result = await resolveAfter2Seconds();
    console.log(result);
  
    // axios.get(`user/${result.user_id}`)
  
    // document.querySelector('#app').innerHTML = result.setup;
    // document.querySelector('#punchline').addEventListener('click', () => {
    //   document.querySelector('#punchline').innerHTML = result.punchline;
    // })
  })

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
