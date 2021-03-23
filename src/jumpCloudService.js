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
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
