import axios from '../axios';

export const fetchAuth = async (email, password) => {
  try {
    const {data} = await axios.post('auth/login', {
      email,
      password
    });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};