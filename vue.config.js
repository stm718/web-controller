module.exports = {
    devServer:{
      public: process.env["C9_PID"] + ".vfs.cloud9.ap-northeast-1.amazonaws.com",
      disableHostCheck: true
    }
};