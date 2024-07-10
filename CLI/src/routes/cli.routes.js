import {Router} from 'express'
import { listImages } from '../controllers/cli.controllers.js'

const router = new Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/list', listImages)

export default router;