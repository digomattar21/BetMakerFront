import axios from 'axios';

class SportsApi {
  constructor() {
    this.api = axios.create({
    //   baseURL: 'https://betmaker-api.herokuapp.com',
      baseURL:'http://localhost:3080'
    });

    this.api.interceptors.request.use(config => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            config.headers.Authorization = `Bearer ${token}`;
        }
      
      
      return config;
    });

    this.api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
        }
        throw error
          
      },
    );
  }

  async getAllSports(){
      try {
        let req = await this.api.get('/sports/get/all')
        console.log(req.data)
        return req.data
      } catch (error) {
          throw error
      }
  }

  async getMatchesFromSport(id){
      try {
        let req = await this.api.get(`/sports/get/sport/today/${id}`)
        console.log(req)
        return req


      } catch (error) {
          throw error
      }
  }



}

export default new SportsApi();