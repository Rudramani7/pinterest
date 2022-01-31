import axios from "axios";

export default axios.create({
    baseUrl:"https://api.unsplash.com/",
    headers:{
        Authorization:"Client-ID GtPcVNfWQR4KmuU_isarQDaKeCrFZzWKia4sqBQLD7k"
    }
})