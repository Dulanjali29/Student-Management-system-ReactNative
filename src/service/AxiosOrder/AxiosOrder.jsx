import axios from "axios";
// const token=localStorage.getItem('stmToken')

const instance = axios.create({
    baseURL: 'https://test.acpt.lk/api',
    // headers:{Authorization:`Bearer ${token}`}

  });
  const storeData = async (response) => {
    try {
      await AsyncStorage.setItem('my-key', response.data.token);
      console.log(response.data.token);
    } catch (e) {
      // saving error
    }
  };
  const getData = async (response) => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  export default instance;