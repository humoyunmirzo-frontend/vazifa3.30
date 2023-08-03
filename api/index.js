import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:3000/api"
})
const getTeamsStrength = async () => {
    try {
        const res = await instance.get("/teams")
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}
const getProjectDeliveries = async () => {
    try {
        const res = await instance.get("/projects")
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}
export { getTeamsStrength, getProjectDeliveries }