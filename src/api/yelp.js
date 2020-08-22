import Axios from 'axios';

export default Axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer Akx94TO9P84Pp0iKMWK8JpKp8dJcWSsvcp57IkQTC26JliM0eaNiwwMLLfxiXDgc0-EVHEOwre8wH7NjTRw7NInbEq5O5ApWTWJ0BLcjlNHopRN1NppLIetNXNf1XnYx'
    }
})