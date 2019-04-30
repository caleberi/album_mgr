const path = require("path"),
      fs = require("fs")

function Album(album_path){
    this.name =  path.basename(album_path);
    this.path  = album_path;
}


Album.prototype.name = null;
Album.prototype.path = null;
Album.prototype._photos = null;

Album.prototype.photo = function(cb){
    if(this._photo != null){
        cb(null,this._photos)
        return;
    }
    var self = this;

    fs.readdir(
        self.path,
        function(err,files){
            if(err){
                if(err.code == "ENOENT"){
                    cb(no_such_album());
                }else{
                    cb({
                        error:"file_error",
                        message:JSON.stringify(err)
                    })
                }
                return;
            }

            var only_files = []
            ( function iterator(index){
                if(index == files.length){
                    self._photos = only_files;
                    cb(null,only_files);
                    return;
                }

                fs.stat(
                    self.path+"/"+files[index],
                    function(err,stat){
                        if(err){
                            cb({
                                error:"file_error",
                                message:JSON.stringify(err)
                            })
                        }

                        if(stat.isFile()){
                            only_files.push(files[index])
                        }
                        iterator(index+1)
                    }
                )
                
            })(0)
        }
    )
}


exports.create_album = function(path){
    return new Album(path)
}

function no_such_album(){
    return{
        error:"no_such_album",
        message:"The specified album does not exist"
    }
}