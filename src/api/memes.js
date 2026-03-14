export const getAllMemes = async() => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    return await response.json();
};

const LOCAL_API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
    const response = await fetch(`${LOCAL_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const loginUser = async (userData) => {
    const response = await fetch(`${LOCAL_API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const saveMeme = async (memeData, token) => {
    const response = await fetch(`${LOCAL_API_URL}/memes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(memeData),
    });
    return response.json();
};

export const getUserMemes = async (token) => {
    const response = await fetch(`${LOCAL_API_URL}/memes`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
};

export const deleteMeme = async (id, token) => {
    const response = await fetch(`${LOCAL_API_URL}/memes/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.json();
};

