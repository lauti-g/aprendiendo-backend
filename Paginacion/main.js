import express from 'express'
import router from './router/routes.js'
import path from 'path'
import 'ejs'
import { fileURLToPath } from 'url';



const dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()


app.use(express.static(path.join(dirname, 'public')));
app.set('views', path.join(dirname, 'views'))
app.set('view engine', 'ejs')




app.get('/', router)
app.get('/registration', router)
app.get('/signIn', router)
app.get('/home', router)



app.listen(3000)
console.log("server on port 3000")