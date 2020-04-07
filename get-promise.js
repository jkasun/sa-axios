const axios = require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
    });


/**
[ { userId: 1,
    id: 1,
    title:
     'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
     'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum
 est autem sunt rem eveniet architecto' },
  { userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
     'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro ve
l nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' },
...
*/