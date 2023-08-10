import { cors, runMiddleware } from "@/backend-functions/middleware";
import { teams } from "@/data/teams";
export default async function handler(req, res) {
  await runMiddleware(req, res, cors)
  res.status(200).json(teams)
}
