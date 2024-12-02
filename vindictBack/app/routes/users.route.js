const userController = require('./../controller/userController')
const controlAccess = require('./../middelware/controlAccess')

app.post('/user/list', controlAccess.controlAccess, userController.getUser)
app.post('/user/:id', userController.getUser)