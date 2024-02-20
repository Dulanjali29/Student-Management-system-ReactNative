import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// const token=localStorage.getItem('stmToken')

const instance = axios.create({
  baseURL: 'https://test.acpt.lk/api',
  // headers:{Authorization:`Bearer ${token}`}

});
const storeData = async (key,value) => {
  try {
  await AsyncStorage.setItem(key, value);
   
  } catch (e) {
  console.log("Error storing data",error);
  }
};
const getData = async (response) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
return null;
    }
  } catch (e) {
    console.log("Error getting data",error);
  }
};
export default instance;