async function processDataAsync() {
    const downloadUrlAsync = 'http://example.com/data';
    const uploadUrlAsync = 'http://example.com/upload';
  
    try {
      const downloadedData = await downloadDataPromise(downloadUrlAsync);
      const filename = await writeFilePromise(downloadedData);
      const uploadResult = await uploadFilePromise(filename, uploadUrlAsync);
      console.log([Async/Await] Workflow completed: ${uploadResult});
    } catch (error) {
      console.error("[Async/Await] Error during the async operation:", error);
    }
  }
  
  processDataAsync();