import { teams } from "@/data/teams";
import Cors from 'cors'
const cors = Cors({
    methods:["GET","HEAD"]
})
export default function handler(req, res) {
    const teamName = req.query.team
    const team = teams.find(item => item.slug == teamName)
    res.status(200).json(team)
}