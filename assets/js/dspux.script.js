function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

(function($) {
  
  /**
   * Initialize Scroll Reveal.
   */
  window.sr = ScrollReveal({
    duration: 1000,
    scale: 1,
    reset: true
  });
  sr.reveal('.sr-chain', 100);
  
  sr.reveal('.sr-from-left', {
    origin: 'left',
    distance: '50px',
    duration: 1000
  });
  
  sr.reveal('.sr-from-right', {
    origin: 'right',
    distance: '50px',
    duration: 1000
  });
  
  sr.reveal('.sr-from-bottom', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    reset: false
  });
  
  $(document).ready(function() {
    
  });
  
})(jQuery);