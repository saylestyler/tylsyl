#!/usr/bin/env node
// ensures proper v numberfor nvm

// watches for image urls copied in system pasteboard
// (e.g. this one, autogenerated with iPic, e.g. http://ww4.sinaimg.cn/large/006tNc79ly1g4r9iftd9aj30wq0u01kz.jpg, which is auto-copied)
// uploads them to cloudinary
// replaces pasteboard with cloudinary url

require('dotenv').load()
const cloudinary = require('cloudinary').v2
const shj = require('shelljs')
const clipboardy = require('clipboardy');

cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_SECRET })

cloudinary.uploader.upload(shj.exec(`pbpaste`, { silent: true }), (e, result) => {
  if (e) console.error(e)
  const cloudinaryUrl = result.secure_url
  clipboardy.writeSync(result.secure_url)
})
