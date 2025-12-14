// const cloudinary = require("cloudinary");


// exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
//     const options = {folder};
//     if(height){
//         options.height = height;
//     }
//     if(quality){
//         options.quality = quality;
//     }
//     options.resource_type = "auto";

//     return await cloudinary.uploader.upload(file.tempFilePath, options)
    
// }

const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };

  if (height) options.height = height;
  if (quality) options.quality = quality;

  // detect based on mimetype
  if (file.mimetype.startsWith("video")) {
    options.resource_type = "video";
  } else {
    options.resource_type = "image"; // default
  }

  return await cloudinary.uploader.upload(file.tempFilePath, options);
};
