import { teamsdata } from "@/data/teams";

export default function handler(req, res) {
  res.status(200).json(teamsdata)
}
