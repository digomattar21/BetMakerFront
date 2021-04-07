import axios from 'axios';

class SoccerApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://betmaker-api.herokuapp.com',
    });

    this.api.interceptors.request.use(config => {
      const token = localStorage.getItem('token');
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    this.api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        localStorage.removeItem('token');
        window.location = '/auth/login';
      },
    );
  }

  async getNextDayMatches(){
      try{
        let req = await this.api.get('/soccer/odds/today');
        if (req.status===200){
            return req.data.matches
        }        
      }catch(err){
          console.log(err.message)
      }
  }

}

export default new SoccerApi();