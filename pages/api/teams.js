import { teams } from "@/data/dashboard"
export default function handler(req, res) {
  res.status(200).json(teams)
}
