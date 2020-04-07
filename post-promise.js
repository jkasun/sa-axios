const axios = require('axios').default;

const newPost = {
    userId: 1,
    title: 'A new post',
    body: 'This is the body of the new post'
};

axios.post(  'https://jsonplaceholder.typicode.com/posts', newPost)
    .then(resp => {
            console.log(resp.data);
    })
    .catch(err => {
            console.error(err);
    });