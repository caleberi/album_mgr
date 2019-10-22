# Album-Manager
This is  a module for managing photo albums on a directory.Assume that given a path ther is an album sub-folder, and each of ites individual sub-folder are themselves the albums.Files in those sub-folder are photos.

## Album Manager
This exposes a single function ,`albums` which returns a array of `album` objects for each albums it contains.

## Album Object
The album object has the following two properties and one methods:
*` name` -- The name of the album
*` path` -- The path of the album
*` photos()` -- Calling this method will returns all the album's photos
