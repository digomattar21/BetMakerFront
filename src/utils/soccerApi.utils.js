import axios from 'axios';

class SoccerApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://betmaker-api.herokuapp.com',
      // baseURL:'http://localhost:3080'
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
          localStorage.removeItem('token')
      }
        if ((error.response.data.message!='"Token inválido ou expirado"' || error.response.data.message!="Token inválido ou expirado" || error.response.data.message!='req sem token' || error.response.data.message!='"req sem token"')){
          throw JSON.stringify(error.response.data.message)
        }
        
      },
    );
  }

  async getNextDayMatches(page){
      try{
        let req = await this.api.get(`/soccer/odds/today/${page}`);
        return req.data.matches
          
      }catch(err){
          console.log(err)
          throw err
      }
  }

  async getMatchesFromDate(date,page){
    try{
      let req = await this.api.get(`/soccer/odds/date/${date}/${page}`);
      return req.data

    }catch(err){
      throw err
    }
  }

  async getFixtureInfo(fixtureId){
    try {
      let req = await this.api.get(`/soccer/fixture/:${fixtureId}`)
      
      return req.data

    } catch (error) {
      throw error
    }
  }

}

export default new SoccerApi();