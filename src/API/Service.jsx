import axios from 'axios';

export default class Service {
  static async getALL() {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
