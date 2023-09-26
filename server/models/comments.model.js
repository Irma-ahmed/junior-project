module.exports=(connection,DataTypes)=>{
    const Comment = connection.define('Comment', {
        text: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
      return Comment
}