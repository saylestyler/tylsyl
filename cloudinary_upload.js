#!/usr/bin/env node 
// ensures proper v numberfor nvm

// watches for image urls copied in system pasteboard 
// (e.g. this one, autogenerated with iPic, e.g. http://ww4.sinaimg.cn/large/006tNc79ly1g4r9iftd9aj30wq0u01kz.jpg, which is auto-copied)
// uploads them to cloudinary
// replaces pasteboard with cloudinary url

const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const shj = require('shelljs')

dotenv.load();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// const test_image_url = `http://ww4.sinaimg.cn/large/006tNc79ly1g4r9iftd9aj30wq0u01kz.jpg` 

const getCopiedUrl = shj.exec(`pbpaste`)

cloudinary.uploader.upload(
  getCopiedUrl, (error, result) => {
    console.log(result, error); 
  }
);

// sample response
// { public_id: 'kpludbszdmtvlvfja8ps',
//   version: 1562483886,
//   signature: '',
//   width: 1178,
//   height: 1080,
//   format: 'jpg',
//   resource_type: 'image',
//   created_at: '2019-07-07T07:18:06Z',
//   tags: [],
//   bytes: 195650,
//   type: 'upload',
//   etag: '',
//   placeholder: false,
//   url:
//    'http://res.cloudinary.com/cloudimgts/image/upload/v1562483886/kpludbszdmtvlvfja8ps.jpg',
//   secure_url:
//    'https://res.cloudinary.com/cloudimgts/image/upload/v1562483886/kpludbszdmtvlvfja8ps.jpg',
//   original_filename: '006tNc79ly1g4r9iftd9aj30wq0u01kz' }
