import fs from 'fs';
const path = './files/fresh.txt';

const create = async () => {
  // Write your code here 
  fs.access( path, fs.F_OK, ( err ) => {
    if ( err ) {
      fs.writeFile( path, 'I am fresh and young.', function ( ) {
      console.log( 'File created!' );
      })
  
    } else {
      throw 'Error FS! File already exists!'
    }
  })
} 


await create();




