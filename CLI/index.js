import express from 'express'
import morgan from 'morgan'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import router from './src/routes/cli.routes.js'

const app= express()
const PORT= process.env.PORT || 4000
const __dirname= dirname(fileURLToPath(import.meta.url))

//Settings
app.set('views',join(__dirname, 'views'))
app.set('view engine', 'ejs')


//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))


//Static files
app.use(express.static(join(__dirname, 'public')))

//Routes
app.use('/', router)


app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})