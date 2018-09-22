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
  const email = $('#mail');
  const error = $(".isa_error").hide();
  // ----------------------------------------------
  //other title - text area
  const otherTitle = $('<textarea rows="3" cols="24.5"></textarea>');
  otherTitle.attr("placeholder", "Your job role");
  otherTitle.attr("id", "other-title");
  $("fieldset:first").after(otherTitle);


  // Default settings
  error.hide();
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
    } else {
      color
        .eq(2)
        .nextAll()
        .show();
    }

    if ($("#design option:last").is(":selected")) {
      color
        .eq(3)
        .prevAll()
        .hide();
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
  });
  // ----------------------------------------------
  // Make a total sum of the activities
  // 1. salvezi ultima particica si le aduni pe toate intr-un total
  // 2.

  // Payment method will either show or hide depending on which one is selected ----
  $("#payment").change(function() {
    if (paypal.is(":selected")) {
      cardDiv.hide();
      paypalDiv.show();
    } else if (bitcoin.is(":selected")) {
      paypalDiv.hide();
      bitcoinDiv.show();
    } else {
      cardDiv.show();
    }
  });
  // ------------------------------------------------
  // Form validation --------------------------------
  name.addEventListener("input", function(event) {
    if(name.value.length === 1) {
      alert("NO");
    }
  })
  email.on("input", function(event) {
    if(email.validity.valid) {
      error.innerHTML = "";
    }
  },false,);

  $('form').on("submit", function(event) {
          console.log('a')
    if(!email.validity.valid) {
      error.show();

    }

  });

  //-------------------------------------------------
  //test
  console.log(button);
});
