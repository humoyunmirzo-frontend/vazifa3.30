import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:3000/api/"
})
const getTeamsStrength = async () => {
    try {
        const res = await instance.get("teamschart")
        return res.data
    } catch (error) {
        console.log(error);
    }
}
const getProjectDeliveries = async () => {
    try {
        const res = await instance.get("projects")
        return res.data
    } catch (error) {
        return []
    }
}
const getTeams = async ()=>{
    try {        
        const res = await instance.get("teams")
        return res.data
    } catch (error) {
        return []
    }
}
const getTeam = async (team)=>{
        try {        
            const res = await instance.get(`teams/${team}`)
            return res.data
        } catch (error) {
            return []
        }
    }
export { getTeamsStrength, getProjectDeliveries,getTeams, getTeam }