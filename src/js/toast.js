const AUTO_HIDE = 'auto-hide';
const PERSISTENT = 'persistent';

class Toast {
  constructor() {
    this.toastContainer = document.createElement('div');
    this.toastContainer.id = 'toast';
    this.toastContainer.className = 'toast';
    this.toastContainer.setAttribute('role', 'status');
    this.toastContainer.setAttribute('aria-live', 'polite');
    this.toastContainer.style.display = 'none';

    this.toastMessage = document.createElement('span');
    this.toastMessage.id = 'toast-message';

    this.closeButton = document.createElement('button');
    this.closeButton.setAttribute('aria-label', 'Close notification');
    this.closeButton.style.cursor = 'pointer';
    this.closeButton.onclick = this.hideToast.bind(this);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 -3 16 16');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12.2928 2.93119L8.8053 6.41883C8.72413 6.49996 8.61406 6.54554 8.4993 6.54554C8.38453 6.54554 8.27446 6.49996 8.19329 6.41883L4.70583 2.93119C4.62208 2.84743 4.52265 2.78099 4.41323 2.73566C4.3038 2.69032 4.18652 2.66699 4.06808 2.66698C3.94963 2.66697 3.83235 2.69029 3.72292 2.73561C3.61348 2.78093 3.51405 2.84736 3.43029 2.9311C3.34653 3.01485 3.28009 3.11428 3.23475 3.2237C3.18942 3.33313 3.16608 3.45041 3.16608 3.56885C3.16607 3.6873 3.18939 3.80458 3.23471 3.91401C3.28003 4.02344 3.34645 4.12288 3.4302 4.20664L6.91784 7.69428C6.99898 7.77545 7.04455 7.88552 7.04455 8.00028C7.04455 8.11505 6.99898 8.22512 6.91784 8.30629L3.4302 11.7938C3.34644 11.8775 3.28 11.9769 3.23467 12.0864C3.18934 12.1958 3.16602 12.3131 3.16602 12.4316C3.16602 12.55 3.18934 12.6673 3.23467 12.7767C3.28 12.8862 3.34644 12.9856 3.4302 13.0694C3.51396 13.1531 3.6134 13.2196 3.72283 13.2649C3.83227 13.3102 3.94956 13.3336 4.06801 13.3336C4.18647 13.3336 4.30376 13.3102 4.41319 13.2649C4.52263 13.2196 4.62207 13.1531 4.70583 13.0694L8.19382 9.58174C8.27499 9.5006 8.38506 9.45503 8.49983 9.45503C8.61459 9.45503 8.72466 9.5006 8.80583 9.58174L12.2928 13.0694C12.462 13.2385 12.6914 13.3334 12.9306 13.3334C13.1698 13.3334 13.3992 13.2385 13.5684 13.0694C13.7375 12.9002 13.8324 12.6708 13.8324 12.4316C13.8324 12.1924 13.7375 11.963 13.5684 11.7938L10.0807 8.30629C9.99961 8.22512 9.95404 8.11505 9.95404 8.00028C9.95404 7.88552 9.99961 7.77545 10.0807 7.69428L13.5686 4.20611C13.7377 4.03696 13.8327 3.80757 13.8327 3.56838C13.8327 3.3292 13.7377 3.09981 13.5686 2.93066C13.4848 2.8468 13.3854 2.78028 13.2759 2.73491C13.1664 2.68954 13.0491 2.66621 12.9306 2.66626C12.812 2.66631 12.6947 2.68974 12.5853 2.7352C12.4758 2.78066 12.3764 2.84726 12.2928 2.93119Z');
    svg.appendChild(path);
    this.closeButton.appendChild(svg);

    this.toastContainer.appendChild(this.toastMessage);
    this.toastContainer.appendChild(this.closeButton);

    document.body.appendChild(this.toastContainer);
  }

  showToast(message, duration) {
    const formattedMessage = message.replace(/\n/g, '<br>');
    this.toastMessage.innerHTML = formattedMessage;
    this.toastContainer.style.display = 'flex';

    if (duration === AUTO_HIDE) {
      setTimeout(this.hideToast.bind(this), 3000);
    }
  }

  hideToast() {
    this.toastContainer.style.display = 'none';
  }
}


const toast = new Toast();

// Expose the constants and the showToast function globally
window.toast = toast;
window.autoHide = AUTO_HIDE;
window.persistent = PERSISTENT;

// Export the toast instance and constants for dynamic JavaScript usage
export { toast, AUTO_HIDE, PERSISTENT };
