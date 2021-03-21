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
       const users  = await this.instance.get('/systemusers');
       return users;
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
