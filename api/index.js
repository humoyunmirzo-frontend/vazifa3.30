import axios from 'axios'
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})
const getTeamsStrength = async () => {
    try {
        const res = await instance.get("todos")
        return res.data
    } catch (error) {
        console.log(error);
    }
}
const getProjectDeliveries = async () => {
    try {
        const res = await instance.get("todos")
        return res.data
    } catch (error) {
        return []
    }
}
const getTeams = async ()=>{
    try {        
        const res = await instance.get("todos")
        return res.data
    } catch (error) {
        return []
    }
}
const getTeam = async (team)=>{
        try {        
            // const res = await instance.get(`teams/${team}`)
            const res = await instance.get(`todos`)
            return res.data
        } catch (error) {
            return []
        }
    }
export { getTeamsStrength, getProjectDeliveries,getTeams, getTeam }