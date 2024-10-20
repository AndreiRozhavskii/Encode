import axios from 'axios';

const apiKey = '7465b9a2-57d0-4c2c-aaa0-b32ed44745ec'; 

export async function fetchData(term) {
    try {
        const response = await axios.post('https://2.intelx.io/intelligent/search', {
            term: term,
            maxresults: 10
        }, {
            headers: {
                'x-key': apiKey,
                'Content-Type': 'application/json'
            }
        });
        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}

export async function fetchDetails(id) {
    try {
        const response = await axios.get(`https://2.intelx.io/intelligent/search/result?id=${id}`, {
            headers: {
                'x-key': apiKey
            }
        });
        return response.data; 
    } catch (error) {
        console.error('Error fetching details:', error);
        throw error; 
    }
}
