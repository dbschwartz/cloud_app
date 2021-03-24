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
      
    
    // Getter
    async getUsers() {
       const response  = await this.instance.get('/systemusers');
       return response.data.results;
    }

    async newUser(newUser) {
      const response  = await this.instance.post('/systemusers', newUser);
      return response.data.results;
   }
  }
