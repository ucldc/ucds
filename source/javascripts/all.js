//= require jquery/dist/jquery
//= require uri.js/src/URI.js
$(function() {
  // parse the `return` href paramater out of the query string
  var href = URI(URI(window.location.search).search(true).return);
  // whitelist for href protocols, check that the hostname isn't changing
  if (( href.protocol() == 'https' || href.protocol() == 'http' )
     && href.hostname() == window.location.hostname ) {
    // update page links to IdPs
    $("[data-entityid]").each(function() {
      var this_href = href.clone();
      this_href.addSearch('entityID', $(this).data('entityid'));
      $(this).prop('href', this_href);
    });
  }
});
