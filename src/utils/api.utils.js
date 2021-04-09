import axios from 'axios';

class Api {
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
        throw JSON.stringify(error.response.data.message)
      },
    );
  }

  async login(payload) {
    try {
      let request  = await this.api.post('/auth/login', payload);
      console.log('req', request);
      request.data.token && localStorage.setItem('token', request.data.token)
      return request
    } catch (error) {
      throw error
    }
  }

  async signup(payload) {
    try{
      let request = await this.api.post('/auth/signup', payload);
      request.data.token && localStorage.setItem('token', request.data.token);
      return request.token;
    }catch(err){
      throw err
    }
  }

  async confirmCode(payload) {
    try {
      let req = await this.api.post('/auth/confirm', payload);
      return req;
    } catch (error) {
      throw error
    }
  }

  async getAvailableMoney(){
    try{
      let req = await this.api.post('/casino/blackjack/getmoney');
      return req;
    }catch(err){
      console.log(err)
    }
  }

  async getInplayEvents(){
    try {
      let req = await this.api.get('/events/inplay');
      console.log(req.data.results)
      return req
    } catch (error) {
      console.log(error.message)
    }
  }

  async getCasinoInfo(){
    try{
      let req = await this.api.get('/casino');
      console.log(req)
    }
    catch(err){
      console.log(err.message)
    }
  }

  async logout (){
    try{
      localStorage.removeItem('token')
      return true
    }catch(err){
      console.log(err.message)
    }
  }

  async getUserInfo(){
    try{
      let req = await this.api.get('/user/getinfo')
      console.log(req)
      return req
    }catch(err){
      console.log(err.message)
    }
  }

  async getPlayerChips(){
    try{
      let req = await this.api.get('/casino/blackjack/getplayerchips');
      return req.data
    }catch(err){
      console.log(err.message)
    }
  }

  async updatePlayerChips(chips){
    try{
      let req = await this.api.post('/casino/blackjack/updateplayerchips', {chips: chips})
      console.log(req.data)
      return req.data
    }catch(err){
      console.log(err.message)
    }
  }

  async getSports(){
    try {
      let req = await this.api.get('/sports')
      if (req.status === 200 || req.status===201){
        return req.data
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  async getSportBets(sport_key){
    try{
      let req = await this.api.get(`/sports/${sport_key}`)
      if (req.status===200 || req.status===201){
        return req.data
      }
    }catch(err){
      console.log(err.message)
    }
  }

}

export default new Api();
