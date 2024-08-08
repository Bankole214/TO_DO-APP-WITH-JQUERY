$("input").change((event) => {
  var okay = $(event.target).val();
  // console.log(input);
  $("ul").append(
    "<li>" +
      okay +
      ' <i class="fas fa-check"></i>  <i class="fas fa-trash"></i> </li>'
  );
  $(event.target).val("");
});


$("ul").on("click", ".fa-trash",  (event) => {
    $(event.target).closest("li").fadeOut(200, () => {
      alert("Item Removed")
  }); //The closest("li") method is used correctly in the event handler for the fa-trash click event. parent would work just fie also
});

$("ul").on("click", ".fa-check",  (event) => {
  $(event.target).parent("li").toggleClass("checked"); //The closest("li") method is used correctly in the event handler for the fa-trash click event. parent would work just fie also || The toggleClass() method in jQuery is used to add or remove one or more classes from each element in a set of matched elements, depending on whether the class is already present or not. This is useful for toggling the visibility, state, or style of elements.
});


