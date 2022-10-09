const { body } = require('express-validator');

const validaRegistraUser = [
    body('name')
        .isLength({min: 3}).withMessage("O nome precisa ter no mínimo 3 caracteres").bail(),
    body('password')
        .isLength({min: 6}).withMessage("A senha precisa ter no mínimo 6 caracteres"),
    //body('email')
        //.isEmail().withMessage("O email precisa ser valido"),
    //body('email')
        //.isEmail().custom(value => {
       // if(!value){
         //   return Promise.reject("E-mail é obrigatório")
       // }
       // if(value == user.email){
          //  return Promise.reject('E-mail já cadastrado')
       // }
       // return true;
    //}),
    
]

module.exports = validaRegistraUser;