import { projects } from "@/data/dashboard"
export default function handler(req, res) {
  res.status(200).json(projects)
}
