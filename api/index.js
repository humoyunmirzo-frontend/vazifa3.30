import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:3000/api/"
})
const getTeamsStrength = async () => {
    try {
        const res = await instance.get("teams")
        return res.data
    } catch (error) {
        return
    }
}
const getProjectDeliveries = async () => {
    try {
        const res = await instance.get("projects")
        return res.data
    } catch (error) {
        return
    }
}
export { getTeamsStrength, getProjectDeliveries }