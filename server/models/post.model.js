module.exports=(connection,DataTypes)=>{
    const Post = connection.define('Post', {
        title: {
          type: DataTypes.STRING, 
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
      return Post
}