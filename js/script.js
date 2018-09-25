document.addEventListener("DOMContentLoaded", () => {
  // put focus on the first text input
  $("#name").focus();
  // declaring variables --------------------------
  const title = $("#title");
  const design = $("#design");
  const color = $("#color option");
  const activities = $(".activities");
  const jsFramework = $('input[name="js-frameworks"]');
  const jsFrameworkLabel = $(".activities label").eq(1);
  const jsLibraries = $('input[name="js-libs"]');
  const jsLibrariesLabel = jsFrameworkLabel.next();
  const express = $('input[name="express"]');
  const expressLabel = $(".activities label").eq(3);
  const node = $('input[name="node"]');
  const nodeLabel = expressLabel.next();
  const cCard = $("#payment option:first").next();
  const paypal = cCard.next();
  const bitcoin = paypal.next();
  const bitcoinDiv = $("div:last");
  const cardDiv = $("#credit-card");
  const paypalDiv = bitcoinDiv.prev();
  const button = $("button");
  const name = document.getElementById("name");
  const $email = $("#mail");
  const $error = $(".isa_error").hide();
  const $name = $("#name");
  const error = document.querySelector(".error");
  const email = document.getElementById("mail");
  const cardNumber = document.getElementById("cc-num");
  const zip = document.getElementById("zip");
  const cvv = document.getElementById("cvv");
  // ----------------------------------------------
  //other title - text area
  const otherTitle = $('<textarea rows="3" cols="24.5"></textarea>');
  otherTitle.attr("placeholder", "Your job role");
  otherTitle.attr("id", "other-title");
  $("fieldset:first").after(otherTitle);
  // ---------------
  // Adding another default option to the color of the T-shirts
  const option = $("<option>Please select a T-shirt theme</option>");
  option.attr("selected", "selected");
  option.attr("disabled", true);
  $("#color").prepend(option);
  //----------------
  // Default settings
  $error.hide();
  $("#design option:first").attr("disabled", true);
  color.hide();
  $("#colors-js-puns").hide();
  otherTitle.hide();
  bitcoinDiv.hide();
  paypalDiv.hide();
  cCard.prev().attr("disabled", true);
  cCard.attr("selected", "selected");
  // ----------------------------------------------

  // Show the other title if the "Other" option is selected
  title.change(function() {
    if ($("#title option:last").is(":selected")) {
      otherTitle.show();
    } else {
      otherTitle.hide();
    }
  });
  // Show the color by design -----------------------
  design.change(function() {
    if (
      $("#design option:first")
        .next()
        .is(":selected")
    ) {
      $("#colors-js-puns").show();
      color
        .eq(2)
        .nextAll()
        .hide();
      $('#color option[value="cornflowerblue"]').attr("selected", "selected");
    } else {
      color
        .eq(2)
        .nextAll()
        .show();
    }

    if ($("#design option:last").is(":selected")) {
      $("#colors-js-puns").show();
      color
        .eq(3)
        .prevAll()
        .hide();
      $('#color option[value="tomato"]').attr("selected", "selected");
    } else {
      color
        .eq(3)
        .prevAll()
        .show();
    }
  });
  // ----------------------------------------------
  // Activities time check and disable the respective checkbox
  activities.on("click", function(event) {
    if (jsLibraries.is(":checked")) {
      node.attr("disabled", true);
      nodeLabel.css("color", "gray");
    } else {
      node.removeAttr("disabled");
      nodeLabel.css("color", "black");
    }
    if (node.is(":checked")) {
      jsLibraries.attr("disabled", true);
      jsLibrariesLabel.css("color", "gray");
    } else {
      jsLibraries.removeAttr("disabled");
      jsLibrariesLabel.css("color", "black");
    }
    if (jsFramework.is(":checked")) {
      express.attr("disabled", true);
      expressLabel.css("color", "gray");
    } else {
      express.removeAttr("disabled");

      expressLabel.css("color", "black");
    }
    if (express.is(":checked")) {
      jsFramework.attr("disabled", true);
      jsFrameworkLabel.css("color", "gray");
    } else {
      jsFramework.removeAttr("disabled");
      jsFrameworkLabel.css("color", "black");
    }
    // 2. make a sum of all, check if they're checked and update their value if checked
  });

  // ----------------------------------------------

  // Payment method will either show or hide depending on which one is selected ----
  $("#payment").change(function() {
    if (paypal.is(":selected")) {
      cardDiv.hide();
      bitcoinDiv.hide();
      paypalDiv.show();
    } else if (bitcoin.is(":selected")) {
      paypalDiv.hide();
      cardDiv.hide();
      bitcoinDiv.show();
    } else {
      cardDiv.show();
      paypalDiv.hide();
      bitcoinDiv.hide();
    }
  });
  // ------------------------------------------------
  // Form validation --------------------------------
  email.addEventListener(
    // real-time checking if the email input has an email-like format
    "input",
    function(event) {
      if (checkEmail(email.value)) {
        $email.addClass("success");
      } else {
        $email.addClass("error");
      }
    },
    false
  );
  // real-time check for numbers only, deleting any letters
  $("input[name='user_cc-num']").keyup(function() {
    if (cCard.is(":selected")) {
      if (!/^[0-9]+$/.test(cardNumber.value)) {
        // if it's only numbers, then
        //replace any letters with an empty string, allow only numbers
        cardNumber.value = cardNumber.value.replace(/\D/g, "");
      }
    }
  });
  $("input[name='user_zip']").keyup(function() {
    if (cCard.is(":selected")) {
      if (!/^[0-9]+$/.test(zip.value)) {
        zip.value = zip.value.replace(/\D/g, "");
      }
    }
  });
  $("input[name='user_cvv']").keyup(function() {
    if (cCard.is(":selected")) {
      if (!/^[0-9]+$/.test(cvv.value)) {
        cvv.value = cvv.value.replace(/\D/g, "");
      }
    }
  });
  //-----------------
  $("form").submit(function(event) {
    if (name.value.length === 0) {
      // if the name is empty, then add an error class
      $name.addClass("error");
      $name.after(
        `<i class="isa_error fa fa-times-circle"></i><p class='err'>The name can't be empty!</p>`
      );

      event.preventDefault();
    } else {
      $name.addClass("success");
    }
    if (!checkEmail(email.value)) {
      // checks if the email input has an email-like format and displays an error if not
      $email.after(
        `<i class="isa_error fa fa-times-circle"></i><p class='err'>Please enter a valid email!</p>`
      );
      event.preventDefault();
      $email.addClass("error");
    }
    if (email.value.length == 0) {
      $email.after(
        // checks if the email is empty or not
        `<i class="isa_error fa fa-times-circle"></i><p class='err'>The email cannot be empty!</p>`
      );
    }
    if ($('input[type="checkbox"]:checked').length > 0) {
      //if there are any checkboxes selected it works! ... but if not ... errors!
    } else {
      activities.prepend(
        `<i class="isa_error fa fa-times-circle"></i><p class='err'>You need to select at least one activity!</p>`
      );
      event.preventDefault();
    }
    // form validation for the card number information
    if (cCard.is(":selected")) {
      if (cardNumber.value.length >= 13 && cardNumber.value.length <= 16) {
        $("#cc-num").addClass("success");
      } else {
        $("#cc-num").addClass("error");
        event.preventDefault();
      }
      if (zip.value.length === 5) {
        $("#zip").addClass("success");
      } else {
        $("#zip").addClass("error");
        event.preventDefault();
      }
      if (cvv.value.length === 3) {
        $("#cvv").addClass("success");
      } else {
        $("#cvv").addClass("error");
        event.preventDefault();
      }
    }
    $(".err") // animations for the errors to dissappear after 5.5 seconds
      .delay(5500)
      .fadeOut();
    $(".isa_error")
      .delay(5500)
      .fadeOut();
  });

  //-------------------------------------------------
  //test
  console.log();
  // function to check the format of an email address
  function checkEmail(email) {
    const result = /\S+@\S+\.\S+/;
    return result.test(email);
  }
  // -----------
  // const total = $(".total");
  // total.hide();
  const checkboxes = $('input[type="checkbox"]');
  function totalSum() {
    let sum = 0;
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      var boxi = checkbox[i];
      if (boxi.checked === true) {
        let price = checkboxes
          .eq(i)
          .parent()
          .html();
        let number = price.substr(price.indexOf("$") + 1);
        number = parseInt(number);
        sum = sum + number;
      }
    }
    // return sum;
    activities.after(`<h2 class='total'>Your total is: ${sum}$</h2>`);
  }
  let theTotal = totalSum();
  activities.on("change", totalSum);
});
