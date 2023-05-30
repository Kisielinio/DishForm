// Funkcja zmiany wyboru typu potrawy
$('#type').change(function() {
  let dishType = $('#type').val();
  $('#pizzaFields').hide();
  $('#soupFields').hide();
  $('#sandwichFields').hide();
//   Pobiera wybraną wartość typu potrawy. Następnie pokazuje odpowiedznie pola dla pizzy, zupy i kanapki.
  switch (dishType) {
      case 'pizza':
          $('#pizzaFields').show();
          break;
      case 'soup':
          $('#soupFields').show();
          break;
      case 'sandwich':
          $('#sandwichFields').show();
          break;
  }
});
// Funkcja obsługi zdarzenia submit formularza
// Tworzy obiekt payload zawierający wartości wprowadzone w polach formularza
$('#dishForm').submit(function(e) {
  e.preventDefault();
  let dishType = $('#type').val();
  let payload = {
      name: $('#name').val(),
      preparation_time: $('#preparation_time').val(),
      type: dishType
  };
  switch (dishType) {
      case 'pizza':
          payload.no_of_slices = $('#no_of_slices').val();
          payload.diameter = $('#diameter').val();
          break;
      case 'soup':
          payload.spiciness_scale = $('#spiciness_scale').val();
          break;
      case 'sandwich':
          payload.slices_of_bread = $('#slices_of_bread').val();
          break;
  }
  // Wykonuje żądanie POST na adres URL z przekonwertowanym na JSON obiektem payload.
  $.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', JSON.stringify(payload))
      .done(function() {
          alert('Data submitted successfully.');
          // Jeśli żądanie jest udane, wyświetla komunikat z powiadomieniem o sukcesie
      })
      .fail(function(response) {
          alert('Error: ' + response.responseText);
          // Jeśli wystąpi błąd, wyświetla komunikat z informacją o błędzie
      });
});