const axios = require('axios').default;

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
    });