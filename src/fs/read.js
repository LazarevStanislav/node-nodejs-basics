import fs from 'fs';
const file = './files/fileToRead.txt'

const read = async () => {
    // Write your code here 
  fs.readFile( file, 'utf8', ( err, data ) => {
    if ( err ) throw err
    console.log(data);
  })
};

await read();
