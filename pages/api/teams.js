import { teams } from "@/data/dashboardTeams"
export default function handler(req, res) {
  res.status(200).json(teams)
}
