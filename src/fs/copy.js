import fs from 'fs';
const path = './files';
const pathCopy = './files_copy';

const copy = async () => {
    // Write your code here 
  fs.stat(path, function(err) {
    if ( err ) {
      throw "Error! Files folder doesn't exists!"
    } else {
      fs.stat( pathCopy, function ( error ) {
        if ( error ) {
          fs.readdir( path, ( err, files ) => {
            if ( err ) throw err ;
            else {
              fs.mkdir( 'files_copy', err => {
                if ( err ) throw err
                console.log( 'Folder "files_copy" created!' );
                files.map( el => fs.copyFile( `${path}/${el}`, `${ pathCopy }/${ el }`, err => {
                if ( err ) throw err 
                console.log(`File ${el} copyed!`);
                }))
              })  
            }
          })
        } else {
          throw 'Error! Folder "files_copy" has already been created!'
        }
      })
    }
  });
};

copy();
