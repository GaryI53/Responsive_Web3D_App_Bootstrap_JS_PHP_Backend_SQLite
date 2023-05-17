// This code should be in your main script file where you handle navigation (like contentSwitch.js)

function loadContent(pageUrl, callback) {
  $("#content").load(pageUrl, function() {
    if (pageUrl === "modelsSwap.html") {
      // Load scripts if modelsSwap.html is loaded
             $.getScript("Model/Model.js")
        .done(function(script, textStatus) {
          $.getScript("view/view.js")
            .done(function(script, textStatus) {
           $.getScript("controller/controller.js")
                .done(function(script, textStatus) {
                  if(callback) callback();
                })
                .fail(function(jqxhr, settings, exception) {
                  console.log("Failed to load controller.js");
                });
            })
            .fail(function(jqxhr, settings, exception) {
              console.log("Failed to load Model.js");
            });
        })
        .fail(function(jqxhr, settings, exception) {
          console.log("Failed to load view.js");
        });
    } else {
      if(callback) callback();
    }
  });
}

$(document).ready(function() {
  // Load home content by default
  loadContent("homeSwap.html");

  // Add click event listeners to navbar links
  $("#home-link").click(function(e) {
    e.preventDefault(); // Prevent default action
    loadContent("homeSwap.html"); // Load home content
  });

  $("#about-link").click(function(e) {
    e.preventDefault(); // Prevent default action
    loadContent("aboutSwap.html"); // Load about content
  });

  $("#models-link").click(function(e) {
    e.preventDefault(); // Prevent default action
    loadContent("modelsSwap.html", function() {
      // After loading scripts, call the functions to bind event listeners.
      if (window.initView) initView();
      if (window.initModel) initModel();
      if (window.initController) initController();
    }); // Load models content
  });
});
