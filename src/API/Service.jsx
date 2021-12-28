import axios from 'axios';

export default class Service {
  static async getALL(pageNumber, postsOnPage) {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${postsOnPage}&_page=${pageNumber}`,
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  static async getPost(postId) {
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  static async getPostComments(postId) {
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
