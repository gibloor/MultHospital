import express from 'express'
import cors from 'cors'

import questions from './modules/questions'
import accounts from './modules/accounts'
import multfilms from './modules/multfilms'
import watched from './modules/watched'
import profile from './modules/profile'
import admin from './modules/admin'
import offer from './modules/offer'

const app = express()

app.use(express.json({limit: '3mb'}))

app.use(cors())
app.use(express.json())

app.use('/questions', questions)
app.use('/accounts', accounts)
app.use('/multfilms', multfilms)
app.use('/watched', watched)
app.use('/profile', profile)
app.use('/admin', admin)
app.use('/offers', offer)

export let userImgPath = '.'
if (process.env.USER_IMG_PATH) {
  userImgPath = process.env.USER_IMG_PATH
}

export let secretKey = 'GibloorKey'
if (process.env.SECRET_KEY) {
  secretKey = process.env.SECRET_KEY
}

app.listen(5000, () => {
  console.log('server has started on port 5000')
})