const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwvcRk5_Fe5HnHuILBYRFc24_LoQr90T3XTWrJ7a3CB49whGK86R0Be7uYNEw620Zl4fw/exec";

const consultForm = document.getElementById("consult-form");
const formStatus = document.getElementById("form-status");

consultForm.addEventListener("submit", function (e) {
  e.preventDefault();

  formStatus.textContent = "Đang gửi...";
  const data = new FormData(consultForm);

  fetch(SHEET_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    body: data,
  })
    .then(function () {
      formStatus.textContent = "Đã gửi yêu cầu tư vấn...";
      consultForm.reset();
    })
    .catch(function () {
      formStatus.textContent = "Gửi thất bại...";
    });
});
