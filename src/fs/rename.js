import fs from 'fs';
const path = './files';
const wrongFile = 'wrongFilename.txt';
const properFile = 'properFilename.md';


const rename = async () => {
    // Write your code here 
  fs.access( `${ path }/${ wrongFile }`, fs.F_OK, ( err ) => {
    if ( err ) throw "Error! File doesn't exists"
    fs.access( `${ path }/${ properFile }`, fs.F_OK, ( error ) => {
      if ( error ) {
        fs.rename( `${ path }/${ wrongFile }`, `${ path }/${ properFile }`, erRename => {
          if ( erRename ) throw erRename
          console.log('File renamed successfully!');
        })
      } else {
        throw 'Error! File has already been created!'
      }
    })
  })
}


await rename();


