const axios = require('axios').default;

const sendRequest = async () => {
    try {
        const resp = await axios({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            data: {
                userId: 1,
                title: 'New post title',
                body: 'This is the new body of the post'
            }
        });

        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
}

sendRequest();