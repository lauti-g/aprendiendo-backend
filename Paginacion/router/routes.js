import app from 'express'
const router = app.Router()

router.get('/', (req, res)=>{
	res.render("firstPage")
})

router.get('/registration', (req, res)=>{
	res.render("registration")
})


router.get('/signIn', (req, res)=>{
	res.render("signIn")
})

router.get('/home', (req, res) =>{
	res.render('home')
})


export default router