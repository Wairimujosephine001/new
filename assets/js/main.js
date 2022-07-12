// *** Write your code here***
function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
  }

  // The function clearNum() to clear on the values in the display
function clearNum(num) {
  if (form.displayResult.value != '') {
      form.displayResult.value = '';
  }
}

// The function deleteNum() to delete a single value
function delNum(num) {
  form.displayResult.value = form.displayResult.value.substr(0, form.displayResult.value.length - 1);
}