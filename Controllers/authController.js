const express = require('express');
const User = require ('../Models/User');
const router = express.Router();
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

const authController = {
    
    create: async (req, res) => {
        const { name, email, password, confirmpassword } = req.body;
       
            try{
            if(!name) {
                return res.status(422).json({msg: 'O nome é obrigatório'})
            }  
            if(!email) {
                return res.status(422).json({msg: 'O email é obrigatório'})
            }
            if (await User.findOne ({email}))
            return res.status(400).send ({error: 'Por favor, utilize outro email!'});

            //const salt = await bcrypt.genSalt(12)
           // const passwordHash = await bcrypt.hash(password, salt)

            if(!password) {
                return res.status(422).json({msg: 'A senha é obrigatória!'})
            }
            if(password !== confirmpassword){
                return res.status(422).json({msg: 'As senhas não conferem!'})
            }

            const user = new User({
                name,
                email,
                password//:passwordHash,
            })
            
            await user.save()
            res.status(201).json({msg: 'Usúario criado com sucesso!'})
        }   catch (err) {
            console.log(err)

            res.status(500).json ({ msg: 'Erro no servidor, tente novamente mais tarde'})
        }
},

    login: async (req, res) => {
        const {email , password} = req.body
        if(!email) {
            return res.status(422).json({msg: 'O email é obrigatório'})
        }
        if(!password) {
            return res.status(422).json({msg: 'A senha é obrigatória!'})
        }
        
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({msg: 'Credenciais incorretas!'});
        }
        
        const checkPassword =  bcrypt.compareSync(password, user.password)  //não esta passando
        if (!checkPassword) {
            return res.status(422).json({msg: 'Credenciais incorretas!!'})
        }
        try{
            const secret = process.env.SECRET

            const token = jwt.sign(
                {
                    id: user._id,
                },
                secret, { expiresIn: '1d' }
            )

            res.status(200).json({msg: 'autenticação realizada com sucesso', token })

        } catch (err) {
            console.log(error)
            res.status(500).json({msg: 'falha ao conectar com o servidor' })
        }

},

    viewSessionId: async (req, res) => {
        const { id } = req.params;
        const user = await User.find(id);
        return res.status(200).send ({ user })
},

    viewOneUser: async (req, res) => {
         const { id } = req.params;
         if(req.user.id !== id) return res.status(401).json ({msg: ' parametros não correspodem com o usuario logado'})
         
    try {
        const user = await User.findOne({ _id: id });

        if(!user) {
              res.status(422).json ({message: 'O usuário não foi encontrado'})
              return
        }
        res.status(200).json ({ user })
    }   catch(error) {
        res.status(500).json({ error: error})
        return
    }
},

    delete: async (req,res) => {
        const { id } = req.params;

        const user = await User.findOne({ _id: id })
    
        if (!user) {
            res.status(422).json({message: 'O usuário não foi encontrado para ser deletado'})
            return
      }

    try {
           await User.deleteOne({ _id : id })

           res.status(200).json({message: 'Usuario deletado com sucesso!'})

        } catch(error) {
           res.status(500).json({ error:error })
       }
    }

}

module.exports = authController;