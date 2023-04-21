import axios from 'axios';
axios
  .get('https://restcountries.com/v3.1/all?fields=name,flags')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });