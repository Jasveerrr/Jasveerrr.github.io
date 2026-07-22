const menu = {
  Apple: [
    { label: "About This Mac" },
    { type: "separator" },
    { label: "System Settings..." }
  ],

  Finder: [
    { label: "About Finder" },
    { type: "separator" },
    { label: "Settings..." },
    { label: "Empty Trash" }
  ],
  File: [
    {
      icon: "ri-add-box-line",
      label: "New Finder Window",
      shortcut: "⌘ N",
    },
    {
      icon: "ri-folder-add-line",
      label: "New Folder",
      shortcut: "⇧ ⌘ N",
    },
    {
      label: "New Folder with Selection",
      shortcut: "⌃ ⌘ N",
      disabled: true,
    },
    {
      icon: "ri-settings-3-line",
      label: "New Smart Folder",
    },

    {
      type: "separator",
    },

    {
      icon: "ri-add-box-line",
      label: "New Tab",
      shortcut: "⌘ T",
    },
    {
      label: "Open in New Window and Close",
      shortcut: "⌥ ⌘ O",
      disabled: true,
    },
    {
      label: "Always Open With",
      arrow: true,
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-close-box-line",
      label: "Close All",
      shortcut: "⌥ ⌘ W",
    },

    {
      type: "separator",
    },

    {
      icon: "ri-information-line",
      label: "Show Inspector",
      shortcut: "⌥ ⌘ I",
    },
    {
      label: "Rename",
      disabled: true,
    },
    {
      icon: "ri-archive-line",
      label: "Compress",
      disabled: true,
    },
    {
      icon: "ri-file-copy-line",
      label: "Duplicate",
      shortcut: "⌘ D",
      disabled: true,
    },
    {
      label: "Make Alias",
      shortcut: "⌃ ⌘ A",
      disabled: true,
    },
    {
      icon: "ri-slideshow-line",
      label: "Slideshow",
      shortcut: "⌥ ⌘ Y",
      disabled: true,
    },
    {
      icon: "ri-printer-line",
      label: "Print",
      shortcut: "⌘ P",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-share-line",
      label: "Share...",
      disabled: true,
    },
    {
      label: "Manage Shared File...",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      label: "Show Original",
      shortcut: "⌘ R",
      disabled: true,
    },
    {
      label: "Add to Sidebar",
      shortcut: "⌃ ⌘ T",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      label: "Delete Immediately...",
      shortcut: "⌥ ⌘ ⌫",
      disabled: true,
    },
    {
      label: "Eject",
      shortcut: "⌥ ⌘ E",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      type: "colors",
      colors: [
        "#ff5f57",
        "#ffbd2e",
        "#ffd60a",
        "#28c840",
        "#0a84ff",
        "#bf5af2",
        "#8e8e93",
      ],
    },

    {
      icon: "ri-price-tag-3-line",
      label: "Tags...",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-search-line",
      label: "Find",
      shortcut: "⌘ F",
    },
  ],

  Edit: [
    {
      icon: "ri-arrow-go-back-line",
      label: "Undo",
      shortcut: "⌘ Z",
      disabled: true,
    },
    {
      icon: "ri-arrow-go-forward-line",
      label: "Redo",
      shortcut: "⇧ ⌘ Z",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-scissors-line",
      label: "Cut",
      shortcut: "⌘ X",
      disabled: true,
    },
    {
      icon: "ri-file-copy-line",
      label: 'Copy "Desktop" as Pathname',
      shortcut: "⌥ ⌘ C",
    },
    {
      label: "Move Item Here",
      shortcut: "⌥ ⌘ V",
      disabled: true,
    },
    {
      label: "Deselect All",
      shortcut: "⌥ ⌘ A",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-clipboard-line",
      label: "Show Clipboard",
    },

    {
      type: "separator",
    },

    {
      icon: "ri-magic-line",
      label: "Writing Tools",
      arrow: true,
    },
    {
      icon: "ri-edit-line",
      label: "AutoFill",
      arrow: true,
    },
    {
      icon: "ri-mic-line",
      label: "Start Dictation",
      disabled: true,
    },
    {
      icon: "ri-emotion-happy-line",
      label: "Emoji & Symbols",
    },
  ],

  View: [
    {
      icon: "ri-layout-grid-line",
      label: "as Icons",
      shortcut: "⌘ 1",
      disabled: true,
    },
    {
      icon: "ri-list-check",
      label: "as List",
      shortcut: "⌘ 2",
      disabled: true,
    },
    {
      icon: "ri-layout-column-line",
      label: "as Columns",
      shortcut: "⌘ 3",
      disabled: true,
    },
    {
      icon: "ri-gallery-line",
      label: "as Gallery",
      shortcut: "⌘ 4",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-stack-line",
      label: "Use Stacks",
      shortcut: "⌃ ⌘ O",
    },
    {
      icon: "ri-sort-asc",
      label: "Sort By",
      arrow: true,
    },
    {
      label: "Clean Up Selection",
      disabled: true,
    },
    {
      label: "Clean Up By",
      arrow: true,
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      label: "Hide Tab Bar",
      shortcut: "⇧ ⌘ T",
      disabled: true,
    },
    {
      label: "Show All Tabs",
      shortcut: "⇧ ⌘ \\",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-layout-left-line",
      label: "Hide Sidebar",
      shortcut: "⌃ ⌘ S",
      disabled: true,
    },
    {
      icon: "ri-layout-right-line",
      label: "Hide Preview",
      shortcut: "⇧ ⌘ P",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      label: "Hide Toolbar",
      shortcut: "⌥ ⌘ T",
      disabled: true,
    },
    {
      label: "Hide Path Bar",
      shortcut: "⌥ ⌘ P",
      disabled: true,
    },
    {
      label: "Hide Status Bar",
      shortcut: "⌘ /",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-tools-line",
      label: "Customize Toolbar...",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-settings-3-line",
      label: "Show View Options",
      shortcut: "⌘ J",
    },
    {
      label: "Show Preview Options",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-fullscreen-line",
      label: "Enter Full Screen",
      shortcut: "⌃ F",
      disabled: true,
    },
  ],

  Go: [
    {
      icon: "ri-arrow-left-s-line",
      label: "Back",
      shortcut: "⌘ [",
      disabled: true,
    },
    {
      icon: "ri-arrow-right-s-line",
      label: "Forward",
      shortcut: "⌘ ]",
      disabled: true,
    },
    {
      icon: "ri-folder-up-line",
      label: "Enclosing Folder",
      shortcut: "⌥ ⌘ ↑",
    },

    {
      type: "separator",
    },

    {
      icon: "ri-history-line",
      label: "Recents",
      shortcut: "⇧ ⌘ F",
    },
    {
      icon: "ri-file-text-line",
      label: "Documents",
      shortcut: "⇧ ⌘ O",
    },
    {
      icon: "ri-computer-line",
      label: "Desktop",
      shortcut: "⇧ ⌘ D",
    },
    {
      icon: "ri-download-line",
      label: "Downloads",
      shortcut: "⌥ ⌘ L",
    },
    {
      icon: "ri-home-4-line",
      label: "Home",
      shortcut: "⇧ ⌘ H",
    },
    {
      icon: "ri-building-2-line",
      label: "Library",
    },
    {
      icon: "ri-computer-line",
      label: "Computer",
      shortcut: "⇧ ⌘ C",
    },
    {
      icon: "ri-radar-line",
      label: "AirDrop",
      shortcut: "⇧ ⌘ R",
    },
    {
      icon: "ri-global-line",
      label: "Network",
      shortcut: "⇧ ⌘ K",
    },
    {
      icon: "ri-cloud-line",
      label: "iCloud Drive",
      shortcut: "⇧ ⌘ I",
    },
    {
      icon: "ri-share-line",
      label: "Shared",
      shortcut: "⇧ ⌘ S",
    },
    {
      icon: "ri-apps-line",
      label: "Applications",
      shortcut: "⇧ ⌘ A",
    },
    {
      icon: "ri-tools-line",
      label: "Utilities",
      shortcut: "⇧ ⌘ U",
    },

    {
      type: "separator",
    },

    {
      icon: "ri-history-line",
      label: "Recent Folders",
      arrow: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-folder-open-line",
      label: "Go to Folder...",
      shortcut: "⇧ ⌘ G",
    },
    {
      icon: "ri-server-line",
      label: "Connect to Server...",
      shortcut: "⌘ K",
    },
  ],

  Window: [
    {
      icon: "ri-subtract-line",
      label: "Minimize All",
      shortcut: "⌥ ⌘ M",
    },
    {
      icon: "ri-focus-3-line",
      label: "Zoom All",
    },
    {
      label: "Fill",
      shortcut: "⌃ ⌥ F",
      disabled: true,
    },
    {
      label: "Center",
      shortcut: "⌃ ⌥ C",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      icon: "ri-layout-grid-line",
      label: "Move & Resize",
      arrow: true,
    },
    {
      icon: "ri-layout-column-line",
      label: "Full Screen Tile",
      arrow: true,
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      label: "Remove Window from Set",
      disabled: true,
    },
    {
      icon: "ri-stack-line",
      label: "Cycle Through Windows",
      shortcut: "⌘ `",
    },
    {
      label: "Show Progress Window",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      label: "Arrange in Front",
      disabled: true,
    },

    {
      type: "separator",
    },

    {
      label: "Show Previous Tab",
      disabled: true,
    },
    {
      label: "Show Next Tab",
      disabled: true,
    },
    {
      label: "Move Tab to New Window",
      disabled: true,
    },
    {
      label: "Merge All Windows",
      disabled: true,
    },
  ],

  Help: [
    {
      type: "search",
      placeholder: "Search",
    },
    {
      icon: "ri-book-open-line",
      label: "Mac User Guide",
    },
    {
      icon: "ri-lightbulb-line",
      label: "Tips for Your Mac",
    },
  ],
};
const menuDropdown = document.querySelector(".menu-dropdown");
const menutriggers=document.querySelectorAll(".menu-trigger");

let activeMenu = null;
menutriggers.forEach(function(trigger){
  trigger.addEventListener('click',()=>{

    const clickedMenu = trigger.dataset.menu;
    const selectedMenu = menu[clickedMenu]; //jo hum click kar rhe hai uska array milega
    
    if(clickedMenu===activeMenu){
      menuDropdown.classList.remove("show");
      activeMenu=null;
      return;
      
    }
    menuDropdown.classList.add("show");
    activeMenu = clickedMenu;


    const triggerPosition=trigger.getBoundingClientRect();
    menuDropdown.style.top=triggerPosition.bottom +'px'
    menuDropdown.style.left=triggerPosition.left +'px'

    let clutter='';

    selectedMenu.forEach(function(item){ 
                                              
      if (item.type==='separator') {  //uske aaray ke saare elemnt yaha ayege
          clutter += `<div class="menu-separator"></div>`;
        return;
      }
      clutter+=`<div class="menu-item">
      <span>${item.label}</span>
        </div>
      `;
    }) 
    menuDropdown.innerHTML = clutter;
  })
});


const dockApps = document.querySelectorAll(".dock-app");
const dock = document.querySelector(".apps-footer");

dock.addEventListener("mousemove", function (event) {
  dockApps.forEach(function (app) {
    const appRect = app.getBoundingClientRect();
    const appCenter = appRect.left + appRect.width / 2;
    const distance= Math.abs(event.clientX-appCenter)    
    let scale = 1;

    if (distance < 50) {
      scale = 1.5;
    } else if (distance < 100) {
      scale = 1;
    } else if (distance < 150) {
      scale = 1;
    }
    app.style.transform=`scale(${scale})`;
  });
});
dock.addEventListener("mouseleave", function () {

  dockApps.forEach(function (app) {
    app.style.transform = "scale(1)";
  });

});

const months = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"
];
const dateTime = document.querySelector(".date-time");
async function updateDateTime() {
  const response = await fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia%2FKolkata");
  const data = await response.json();
  const day = data.dayOfWeek.slice(0, 3);
  const month = months[data.month - 1];
  let hour = data.hour;
  const period= hour>=12?'PM':'AM';
  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour === 0) {
    hour = 12;
  }
  const minute=String(data.minute).padStart(2, "0");
  dateTime.textContent=`${day} ${month} ${data.day} ${hour}:${minute} ${period}`
}
updateDateTime();
setInterval(updateDateTime, 60000)