const User = require('../models/userModel');

exports.home = (req,res) => {
    res.send('<h1>Server running</h1>')
};

exports.createUser = async(req,res) => {
    try {

        const {name,email,pass} = req.body;

       const user = await User.create({
            name,
            email,
            pass
        })

        if (!name || !email || !pass) {
            throw new Error ('All filed required')
        }

        res.status(200).json({
            status : true,
            message : 'User Successfully Created',
            user
        })

        
    } catch (error) {
        console.log('Erro',error);
        res.status(401).json({
            status : false,
            message : error.message
        })
    }
}

exports.getUser = async(req,res) => {
    try {

        const user = await User.find({});

        if (user.length < 1){
            throw new Error ('No Data Found');
        }

        res.status(200).json({
            status: true,
            message : 'Fetched All Data',
            user
        })
        
    } catch (error) {
        console.log('Error',error);
        res.status(401).json({
            status : false,
            message : 'Not fetched'
        })
    }
}

exports.deleteUser = async(req,res) => {
    try {

        const userId = req.param.id;
        
        const user = await User.findByIdAndDelete(userId);

        res.status(200).json({
            status : true,
            messsage : 'User Deleted Successfully',
        })

        
    } catch (error) {
        console.log('Error',error);
        res.status(401).json({
            status : false,
            message : 'Not deleted'
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, pass } = req.body;
    
        if (!email || !pass) {
            throw new Error ('All filed required')
            
        }
    
        const user = await User.findOne({
            email,
            pass
        });
    
        // if (!user || !user.comparePassword(password)) {
        //     return next(new AppError('Email or password does not match', 400));
        // }
    
        // const token = await user.generateJWTToken();
        if (email == user.email && pass == user.pass){
            res.status(200).json({
                success: true,
                message: 'User loggedin successfully',
                user,
            });
        }
    
        // res.cookie('token', token, cookieOptions);
    
        
    } catch(e) {
        res.status(401).json({
            success : false,
            message : 'Error Found'
        })
    }
};
