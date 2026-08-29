const demoData = {
  members: [
    "Yacine Boudiaf",
    "Sofiane Khider",
    "Kenza Amrani",
    "Lina Mansouri",
    "Meriem Belkacem",
    "Anis Ferhat",
    "Nassim Bensalem",
    "Imene Ouali",
    "Rania Touati",
    "Zinedine Hamla",
    "Nourredine Saadi",
    "Samia Rezig"
  ],
  sampleRevenueDZD: 352000
};

const yearElement = document.getElementById("year");
const membersCountElement = document.getElementById("membersCount");
const revenueValueElement = document.getElementById("revenueValue");
const toastElement = document.getElementById("toast");

const demoModal = document.getElementById("demoModal");
const previewModal = document.getElementById("previewModal");

const showToast = (message) => {
  if (!toastElement) {
    return;
  }

  toastElement.textContent = message;
  toastElement.classList.add("show");

  window.setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2200);
};

const openModal = (modal) => {
  if (!modal || typeof modal.showModal !== "function") {
    return;
  }

  modal.showModal();
};

const closeModal = (modal) => {
  if (!modal || typeof modal.close !== "function") {
    return;
  }

  modal.close();
};

document.getElementById("openDemoModal")?.addEventListener("click", () => {
  openModal(demoModal);
});

document.getElementById("openPreviewModal")?.addEventListener("click", () => {
  openModal(previewModal);
});

document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(button.closest("dialog"));
  });
});

document.getElementById("notifyEmpty")?.addEventListener("click", () => {
  showToast("Coach notified successfully.");
});

document.getElementById("retrySync")?.addEventListener("click", () => {
  showToast("Payment sync queued.");
});

document.getElementById("leadForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  if (!form.reportValidity()) {
    showToast("Please complete all required fields.");
    return;
  }

  showToast("Request submitted. We will contact you soon.");
  form.reset();
});

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

if (membersCountElement) {
  membersCountElement.textContent = String(demoData.members.length);
}

if (revenueValueElement) {
  revenueValueElement.textContent = `${demoData.sampleRevenueDZD.toLocaleString("fr-DZ")} DZD`;
}
