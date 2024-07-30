export const downloadFile = async (url: string, baseName: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const blob = await response.blob();
    const urlBlob = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', urlBlob);
    link.setAttribute('download', baseName);
    link.dispatchEvent(new MouseEvent('click'));

    // Revogar o URL do blob após o download
    URL.revokeObjectURL(urlBlob);
  } catch (error) {
    console.error('Failed to download file:', error);
  }
};
