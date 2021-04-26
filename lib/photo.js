class PhotoOverview {
  constructor(path) {
    this.path = path;
  }

  getPhoto() {
    const pathArray = this.path.split("/");
    const extension = this.path.match(/\.[0-9a-z]+$/i)[0];
    const filename = pathArray[pathArray.length - 1];
  }
}

class Photo {
  constructor(name, filepath, details) {
    this.name = name;
    this.filepath = filepath;
    this.details = details;
  }
  /**
   *  getOverallPhotoDescription  gets a raw overview of the a given photo an
   *  return a proper Object overview to every attribute of given photo
   *  @returns {PhotoOverview}
   */
  getOverAllPhotoDescription() {
    return PhotoOverview(this.filepath);
  }
}

module.exports = Photo;
