
const userLogin = async (req, res) =>{}
const userRegister = async (req, res) =>{}
const adminLogin = async (req, res) =>{}
const removeUser = async (req, res) =>{}
const updateUser = async (req, res) =>{}
const getUser = async (req, res) =>{
    res.send('find user')
}

export{
    userLogin,
    userRegister,
    adminLogin,
    removeUser,
    updateUser,
    getUser
}