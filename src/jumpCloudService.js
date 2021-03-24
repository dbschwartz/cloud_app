import axios from 'axios';
export class JumpCloudService {
    constructor() {
      this.instance = axios.create({
        baseURL: '/api',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
          }
        });
    }
    async getUsers() {
       const response  = await this.instance.get('/systemusers');
       return response.data.results;
    }
    async newUser(user) {
      const {
        firstname,
        lastname,
        username,
        email,
      } = user;
      const newUser = {
        firstname,
        lastname,
        username,
        email
      };
      const response  = await this.instance.post('/systemusers', newUser);
      return response.data.results;
   }
   async editUser(user) {
    const {
      firstname,
      lastname,
      username,
      email,
      _id
    } = user;
    const editedUser = {
      firstname,
      lastname,
      username,
      email
    };
    const response  = await this.instance.put(`/systemusers/${_id}`, editedUser);
    return response.data.results;
 }
  }
