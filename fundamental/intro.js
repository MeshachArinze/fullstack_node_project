const os =require('node:os')

// check current user

const user = os.userInfo()
const cpus = os.cpus();
console.log(user, cpus)