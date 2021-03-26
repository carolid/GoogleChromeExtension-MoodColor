let color = '#1991DA';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cblue', `color: ${color}`);
});
