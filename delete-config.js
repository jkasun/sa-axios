const axios = require('axios').default;

const sendRequest = async () => {
    try {
        const resp = await axios({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        });

        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};

sendRequest();