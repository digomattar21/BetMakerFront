import axios from 'axios';

class SoccerApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://betmaker-api.herokuapp.com',
      // baseURL:'http://localhost:3080'
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

  async getNextDayMatches(page){
      try{
        let req = await this.api.get(`/soccer/odds/today/${page}`);
        if (req.status===200){
            return req.data.matches
        } else{
          return ['no results']
        }       
      }catch(err){
          console.log(err.message)
      }
  }

  async getNext3DaysMatches(page){
    try {
      
      let req = this.api.get(`/soccer/odds/next3/${page}`)
      return req
    } catch (error) {
      console.log(error.message)
    }
  }

  async getNextWeekMatches(page){
    try {
      let req = this.api.get(`/soccer/odds/week${page}`)
      return req
    } catch (error) {
      console.log(error.message)
    }
  }

}

export default new SoccerApi();