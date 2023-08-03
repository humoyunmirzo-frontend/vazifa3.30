import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:3000/api"
})
const getDashboardInfo = async () => {
    try {
        const res = await instance.get("/dashboard")
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}
export { getDashboardInfo }