// import { cors, runMiddleware } from "@/backend-functions/middleware"
import { projects } from "@/data/dashboard"
export default  function handler(req, res) {
  // await runMiddleware(req, res, cors)
  res.status(200).json(projects) 
}
