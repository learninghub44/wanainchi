import { createIssue }
from "../api/issues";

import {
uploadToCloudinary
}
from "./cloudinary";

export const submitIssue =
async(
formData,
files,
position
)=>{

const uploadedImages = [];

for(const file of files){

const uploaded =
await uploadToCloudinary(
file
);

uploadedImages.push(
uploaded.secure_url
);

}

const payload = {

...formData,

images:uploadedImages,

latitude:
position?.[0],

longitude:
position?.[1]

};

return createIssue(payload);

};