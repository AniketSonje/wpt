import axios from 'axios';

class Service{
    constructor(){
        this.baseUrl = "http://localhost:4000/";
    }


    authenticate(id,fname)
    {
        return axios.get(this.baseUrl+"login/"+'"'+id+'"/"'+fname+'"');
    }
}

export default new Service;
