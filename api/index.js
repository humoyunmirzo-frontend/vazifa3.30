import axios from 'axios'
const instance = axios.create({
    baseURL: "https://vazifa3-30.vercel.app/api"
})
const getTeamsStrength = async () => {
    try {
        const res = await instance.get("/teams")
        console.log(res.data);
        return res.data
    } catch (error) {
        return
    }
}
const getProjectDeliveries = async () => {
    try {
        const res = await instance.get("/projects")
        console.log(res.data);
        return res.data
    } catch (error) {
        return
    }
}
export { getTeamsStrength, getProjectDeliveries }