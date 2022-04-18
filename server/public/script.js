document.getElementById('toggle').addEventListener('click', function(e) {
  fetch('/toggle', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});