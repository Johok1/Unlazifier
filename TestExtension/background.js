x=0;
chrome.tabs.onActivated.addListener(tab=>{
    
        chrome.tabs.get(tab.tabId, current_tab_info => {
         if((/^https:\/\/www\.youtube/.test(current_tab_info.url))&&x<1) {
              chrome.tabs.insertCSS(null, {file: './mystyles.css'});
              chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('ree'))
              chrome.tabs.create({'url':"https://garlandisd.instructure.com/"});
            
            x++;
         }
        });
   
});
chrome.tabs.onRemoved.addListener(tab=>{    
          x=0;
    });




