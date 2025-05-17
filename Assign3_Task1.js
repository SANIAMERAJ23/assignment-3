function downloadDataCallback(url, callback) {
    console.log([Callback] Downloading data from ${url}...);
    setTimeout(() => {
      const data = Data downloaded from ${url};
      console.log([Callback] Data downloaded successfully.);
      callback(null, data); // First argument for error, second for success
    }, 1500);
  }
  
  function writeFileCallback(data, callback) {
    console.log([Callback] Writing data to file...);
    setTimeout(() => {
      const filename = temp_${Date.now()}.txt;
      console.log([Callback] Data written to ${filename});
      callback(null, filename);
    }, 1000);
  }
  
  function uploadFileCallback(filename, uploadUrl, callback) {
    console.log([Callback] Uploading ${filename} to ${uploadUrl}...);
    setTimeout(() => {
      console.log([Callback] ${filename} uploaded successfully to ${uploadUrl});
      callback(null, Upload complete for ${filename});
    }, 2000);
  }
  
  // Chaining the callbacks
  const downloadUrlCallback = 'http://example.com/data';
  const uploadUrlCallback = 'http://example.com/upload';
  
  downloadDataCallback(downloadUrlCallback, (error, downloadedData) => {
    if (error) {
      console.error("Error during download:", error);
      return;
    }
    writeFileCallback(downloadedData, (error, filename) => {
      if (error) {
        console.error("Error during writing:", error);
        return;
      }
      uploadFileCallback(filename, uploadUrlCallback, (error, uploadResult) => {
        if (error) {
          console.error("Error during upload:", error);
          return;
        }
        console.log([Callback] Workflow completed: ${uploadResult});
      });
    });
  });