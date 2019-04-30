const fs =  require("fs"),
    album = require("./albums.js");


exports.version ="1.1.0"

exports.albums =(root,cb)=>{
    // assume that any folder is our  'albums'
    // subfolder is an album
    fs.readdir(
        root+"/albums",
        function(err,files){
            if(err){
                cb(err)
                return
            }

            var album_list = []
            (function iterator(index){
                if(index == files.length){
                    cb(null,album_list)
                    return
                }

                fs.stat(
                    root+"albums/"+files[index],
                    function(err,stats){
                        if(err){
                            cb({
                                error:"file_error",
                                message:JSON.stringify(err)
                            })
                            return
                        }
                        if(stats.isDirectory()){
                            var p = root + "albums/" +files[index];
                            album_list.push(album.create_album(p));
                        }

                        iterator(index+1)
                    }
                )
                
            })(0)
        }
    )
}