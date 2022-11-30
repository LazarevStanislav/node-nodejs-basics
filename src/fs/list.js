import fs from 'fs';
const path = './files';



const list = async () => {
    // Write your code here 
  fs.stat( path, err => {
    if ( err ) throw err
    fs.readdir( path, ( error, files ) => {
      if ( error ) throw error
      console.log(files);
    })
  })
};

await list();
