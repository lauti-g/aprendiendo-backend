import app from 'express'
const router = app.Router()
import { pool } from '../DB/connectDB.js'



router.get('/', (req, res)=>{
	res.render("home")
})
router.get('/registration', (req, res)=>{
	res.render("registration")
})
router.get('/deleteUser', (req, res)=>{
	res.render("deleteUser")
})
router.get('/changeUsername', (req, res)=>{
	res.render("changeUsername")
})


router.post('/registration',async (req, res)=>{
	const newUser = req.body
	pool.query(`INSERT INTO users (username, password, email, age) VALUES ("${newUser.username}", "${newUser.password}", "${newUser.email}", "${newUser.age}")`)
	res.send("usuario registrado")
})


router.delete('/deleteUser',async (req,res)=>{
	const deleteUser = req.body
	console.log(deleteUser)
	const idUser = await pool.query(`SELECT id FROM users WHERE  username = "${deleteUser.username}"`)
	pool.query(`DELETE  FROM users WHERE id = ${idUser[0][0].id} `)
	res.send(`usuario ${deleteUser.username} borrado`)
})

router.put('/changeUsername', async (req, res)=>{
	const newUsername = req.body
	const id = await pool.query(`SELECT id FROM users WHERE username = "${newUsername.username}"`)
	pool.query(`UPDATE users SET username = "${newUsername.newUsername}" WHERE id = ${id[0][0].id}`)
	res.end("username updated")
})

export default router