import fs from 'fs';



const remove = async () => {
    // Write your code here 
  fs.unlink( './files/fileToRemove.txt', err => {
    if ( err ) throw 'No such file!'
    console.log('File deleted successfully');
  })
};

await remove();
