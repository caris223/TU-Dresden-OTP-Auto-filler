// Saves options to chrome.storage
const saveOptions = () => {
  const password = document.getElementById('password').value;
  
  if (!password) {
      const status = document.getElementById('status');
      status.textContent = 'Please enter a password.';
      status.style.color = 'red';
      return;
  }

  chrome.storage.sync.set(
    { otpPassword: password },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Settings saved successfully.';
      status.style.color = 'green';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { otpPassword: '' },
    (items) => {
      document.getElementById('password').value = items.otpPassword;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);