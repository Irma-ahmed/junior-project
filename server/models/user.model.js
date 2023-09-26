module.exports=(connection,DataTypes)=>{
    const User = connection.define('User', {
        
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, 
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
      return User
}