//= require jquery/dist/jquery
//= require uri.js/src/URI.js
$(function() {
  var href = URI(URI(window.location.search).search(true).return);
  $("[data-entityId]").each(function() {
    var this_href = href.clone();
    this_href.addSearch('entityID', $(this).data('entityid'));
    $(this).prop('href', this_href);
  });
});
