const axios = require('axios').default;

axios({
  method: 'PUT',
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  data: {
    userId: 1,
    title: 'New post title',
    body: 'This is the new body of the post'
  }
}).then(resp => {
    console.log(resp.data);
}).catch(err => {
    // Handle error here
    console.error(err);
});