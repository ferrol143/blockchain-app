import axios from "axios";

const login = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/login`, data, {
        headers  : {
            'Content-Type': 'application/json'
        },
        withCredentials: true 
      })
    
    } catch (error) {
      console.log(error)
    }
}

const loginGoogle = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/url`, {
            headers  : {
                'Content-Type': 'application/json'
            },
            withCredentials: true 
        });

        const result = response.data;
        const { url } = result.data;

        window.location.assign(url);
    } catch (error) {
      console.log(error)
    }
}

const logout = async () => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/logout`, { 
            headers  : {
                'Content-Type': 'application/json'
            },
            withCredentials: true 
        });

        if(response.status && response.status === 200) {
            console.log(response)
        }else{
            console.log(response)
        }
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

export { login, loginGoogle, logout }