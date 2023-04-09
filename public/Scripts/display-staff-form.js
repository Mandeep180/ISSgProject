
function displayModal() {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the submitted form data
  const form = document.getElementById("appointmentForm");
  const formData = new FormData(form);

  // Create the modal window
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Create the modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Create a close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.classList.add("close");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
  modalContent.appendChild(closeButton);

  // Loop through the form data and create paragraphs for each field
  for (const [key, value] of formData.entries()) {
    const label = document.createElement("strong");
    label.textContent = `${key}: `;
    modalContent.appendChild(label);
    modalContent.appendChild(document.createTextNode(value));
    modalContent.appendChild(document.createElement("br"));
  }

  // Create a send button
  const sendButton = document.createElement("button");
  sendButton.textContent = "Send";
  sendButton.classList.add("send");
  sendButton.addEventListener("click", () => {
    alert("Information sent!");
    document.body.removeChild(modal);
  });
  modalContent.appendChild(sendButton);

  // Add the modal content to the modal window
  modal.appendChild(modalContent);

  // Add the modal window to the page
  document.body.appendChild(modal);
}

function clearForm() {
  document.getElementById("appointmentForm").reset();
}
