$(document).ready(function() {

  // Function to fetch data from the PHP script and update the page content
  function fetchData(id) {
    $.ajax({
      url: 'js/models.php',
      type: 'GET',
      data: { id: id },
      dataType: 'json',
      success: function(data) {
        console.log("Successfully found the models.php file");
        $("#modelDescription").text(data.description);
        $("#modelTitle").text(data.title);
        $("#modelDescriptionLower").text(data.descriptionLower);
        $("#modelTitleLower").text(data.titleLower);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  }

  // Event handler for the buttons
  $(document).on('click', '#cokeLink, #spriteLink, #fridgeLink, #drPepCup', function(event) {
    fetchData(this.id);
  });

  // Event handler for finding #cokeLink
  $(document).on('DOMNodeInserted', '#cokeLink', function() {
    // Code to run after #cokeLink is inserted into the DOM
    console.log("#cokeLink is found");
    // Add any additional JavaScript code you want to execute after #cokeLink is found
  });

  // Fetch default data when the page loads
  fetchData('coke');

});
