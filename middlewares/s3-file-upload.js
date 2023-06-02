const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const multerSharp = require("multer-sharp-s3")
const path = require("path");
const crypto = require("crypto");
const { Access_Key_ID, Secret_Access_Key, BUCKET_NAME } = process.env;
const s3 = new aws.S3({ accessKeyId: Access_Key_ID, secretAccessKey: Secret_Access_Key, Bucket: BUCKET_NAME });

const getFileKey = (file, folder) => {
    if (!file) return false;
    const name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + path.extname(file.originalname);
    return `digrowfa-service/${folder}/${name}`;
};



const s3StorageAdminProfile = multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, callBack) => callBack(null, { fieldName: file.fieldname }),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    serverSideEncryption: "AES256",
    cacheControl: "max-age=31536000",
    key: (req, file, cb) => cb(null, getFileKey(file, "admin"))
});

const s3StorageCareerResume = multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, callBack) => callBack(null, { fieldName: file.fieldname }),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    serverSideEncryption: "AES256",
    cacheControl: "max-age=31536000",
    key: (req, file, cb) => cb(null, getFileKey(file, "careerResume"))
});

const s3StorageCategoryImage = multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, callBack) => callBack(null, { fieldName: file.fieldname }),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    serverSideEncryption: "AES256",
    cacheControl: "max-age=31536000",
    key: (req, file, cb) => cb(null, getFileKey(file, "category"))
});

const s3StorageJobCategoryImage = multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, callBack) => callBack(null, { fieldName: file.fieldname }),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    serverSideEncryption: "AES256",
    cacheControl: "max-age=31536000",
    key: (req, file, cb) => cb(null, getFileKey(file, "jobCategory"))
});

const s3StorageCategoryDetail = multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, callBack) => callBack(null, { fieldName: file.fieldname }),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    serverSideEncryption: "AES256",
    cacheControl: "max-age=31536000",
    key: (req, file, cb) => cb(null, getFileKey(file, "categoryDetail"))
});

const s3StorageRevolutionClientImage = multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, callBack) => callBack(null, { fieldName: file.fieldname }),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    serverSideEncryption: "AES256",
    cacheControl: "max-age=31536000",
    key: (req, file, cb) => cb(null, getFileKey(file, "revolutionClient"))
});




const s3StorageComp = multerSharp({
    s3: s3,
    Bucket: BUCKET_NAME,
    Key: (req, file, cb) => crypto.pseudoRandomBytes(16, (err, raw) => cb(err, err ? undefined : raw.toString('hex') + path.extname(file.originalname))),
    ACL: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    serverSideEncryption: "AES256",
    cacheControl: "max-age=31536000",
    withMetadata: true,
    toFormat: { type: 'jpeg', options: { progressive: true, quality: 40 } },

});


module.exports = {
    s3: s3,
    uploadS3AdminProfile: multer({ storage: s3StorageAdminProfile }),
    uploadS3CareerResume: multer({ storage: s3StorageCareerResume }),
    uploadS3CategoryImage: multer({ storage: s3StorageCategoryImage }),
    uploadS3JobCategoryImage: multer({ storage: s3StorageJobCategoryImage }),
    uploadS3CategoryDetail: multer({ storage: s3StorageCategoryDetail }),
    uploadS3RevolutionClientImage: multer({ storage: s3StorageRevolutionClientImage }),
    uploadS3Sharp: multer({ storage: s3StorageComp }),
}
