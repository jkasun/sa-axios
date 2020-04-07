const axios = require('axios').default;

axios({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/posts',
  headers: {
    'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
  }
}).then(resp => {
    console.log(resp.data);
}).catch(err => {
    // Handle error here
    console.error(err);
});