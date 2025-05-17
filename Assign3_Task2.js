function downloadDataPromise(url) {
    return new Promise((resolve, reject) => {
      console.log([Promise] Downloading data from ${url}...);
      setTimeout(() => {
        const data = Data downloaded from ${url};
        console.log([Promise] Data downloaded successfully.);
        resolve(data);
      }, 1500);
    });
  }
  
  function writeFilePromise(data) {
    return new Promise((resolve, reject) => {
      console.log([Promise] Writing data to file...);
      setTimeout(() => {
        const filename = temp_${Date.now()}.txt;
        console.log([Promise] Data written to ${filename});
        resolve(filename);
      }, 1000);
    });
  }
  
  function uploadFilePromise(filename, uploadUrl) {
    return new Promise((resolve, reject) => {
      console.log([Promise] Uploading ${filename} to ${uploadUrl}...);
      setTimeout(() => {
        console.log([Promise] ${filename} uploaded successfully to ${uploadUrl});
        resolve(Upload complete for ${filename});
      }, 2000);
    });
  }
  
  // Chaining the promises using .then()
  const downloadUrlPromise = 'http://example.com/data';
  const uploadUrlPromise = 'http://example.com/upload';
  
  downloadDataPromise(downloadUrlPromise)
    .then(downloadedData => {
      return writeFilePromise(downloadedData);
    })
    .then(filename => {
      return uploadFilePromise(filename, uploadUrlPromise);
    })
    .then(uploadResult => {
      console.log([Promise] Workflow completed: ${uploadResult});
    })
    .catch(error => {
      console.error("Error during the promise chain:", error);
    });