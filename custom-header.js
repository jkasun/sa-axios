const axios = require('axios').default;

const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'authorization': 'Bearer YOUR_JWT_TOKEN_HERE'
            }
        });
        console.log(resp.data);
    } catch(err) {
        console.error(err);
    }
};

sendGetRequest();