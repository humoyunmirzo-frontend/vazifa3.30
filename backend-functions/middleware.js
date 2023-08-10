import Cors from 'cors'
function runMiddleware(req, res,fn){
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if(result instanceof Error){
                return reject(result)
            }
            return resolve(result)
        })
    })
}
const cors = Cors({
    method:["GET","HEAD"]
})
export  {runMiddleware,cors}