const axios = require('axios')
const {BASE_URL, CONTENT_TYPE} = require('../../utils/AAApConstants')


class HomeMenuVM {



  async callSocialLogin(sToken = "-1", sCode = -1) {

    const req_d = {sToken, sCode}
    try{
      const res = await axios({
        method: 'post',
        url: `${BASE_URL}auth/socialLogin`,
        data: req_d,
        config: CONTENT_TYPE
      })


      console.log('res.data :', res.data);


    }catch(err){
      console.log('err.message :', err.message);
    }
  }

}


export default HomeMenuVM
