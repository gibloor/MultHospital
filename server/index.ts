import express from 'express'
import cors from 'cors'
import https from 'https'
import fs from 'fs'

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

app.use('/api/questions', questions)
app.use('/api/accounts', accounts)
app.use('/api/multfilms', multfilms)
app.use('/api/watched', watched)
app.use('/api/profile', profile)
app.use('/api/admin', admin)
app.use('/api/offers', offer)

export let userImgPath = '.'
if (process.env.USER_IMG_PATH) {
  userImgPath = process.env.USER_IMG_PATH
}

export let secretKey = 'GibloorKey'
if (process.env.SECRET_KEY) {
  secretKey = process.env.SECRET_KEY
}

const isDevelopment = process.env.NODE_ENV === 'development'
const PORT = 5000

if (isDevelopment) {
  app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
  })
} else {
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/multhospital.com/privkey.pem', 'utf8')
  const certificate = fs.readFileSync('/etc/letsencrypt/live/multhospital.com/cert.pem', 'utf8')
  const credentials = { key: privateKey, cert: certificate }

  const httpsServer = https.createServer(credentials, app)

  httpsServer.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
  })
}