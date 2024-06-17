<script>
  import { onMount } from 'svelte';
  import { showToast } from '../stores/toastStore.js';

  let email = '';
  let emailError = '';
  let isValid = true;
  let subject = '';
  let messageInput;

  const emailPattern = String.raw`[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$`;

  $: subject = `New message from ${email}`;

  function validateEmail() {
    const regex = new RegExp(emailPattern);
    if (!email) {
      emailError = 'Email is required';
      isValid = false;
    } else if (!regex.test(email)) {
      emailError = 'Invalid email, try another';
      isValid = false;
    } else {
      emailError = '';
      isValid = true;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    validateEmail();

    if (!isValid) {
      return;
    }

    const form = event.target;
    const formData = new FormData(form);
    const data = new URLSearchParams();

    for (const pair of formData.entries()) {
      data.append(pair[0], pair[1]);
    }

    try {
      const response = await fetch('.netlify/functions/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      });

      if (response.ok) {
        showToast('Message sent!', 'persistent');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      showToast('Message failed', 'persistent');
      console.error(error);
    }
  }

  function autoExpandField(field) {
    field.style.height = 'auto';
    field.style.height = field.scrollHeight + 'px';
  }

  onMount(() => {
    messageInput.addEventListener('input', function () {
      autoExpandField(this);
    });

    autoExpandField(messageInput);
  });

  function clearEmailError() {
    emailError = '';
    isValid = true;
  }
</script>

<main>
  <section id="contact" class="section h-auto pb-6xl">
    <h1 class="scroll-hidden">Get in touch</h1>

    <div class="flex flex-col gap-lg items-start">
      <p class="scroll-hidden">
        <span class="text-b">Discuss a or just</span>
        <span>say hello.</span>
      </p>

      <div class="scroll-hidden flex gap-xl content-center items-center">
        <a
          href="https://www.linkedin.com/in/codyrco"
          target="_blank"
          id="linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="36"
            height="36"
          >
            <path
              d="M18.52.5H1.477C.66.5 0 1.145 0 1.941v17.114c0 .797.66 1.445 1.477 1.445H18.52c.816 0 1.48-.648 1.48-1.441V1.94C20 1.145 19.336.5 18.52.5M5.934 17.543h-2.97V7.996h2.97zM4.449 6.695a1.72 1.72 0 1 1-.006-3.439 1.72 1.72 0 0 1 .006 3.44m12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719H7.797V7.996h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547z"
            />
          </svg>
        </a>
        <a href="https://m.me/codycurbside" target="_blank" id="messenger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="34"
            height="34"
          >
            <path
              d="M0 10.2C0 4.627 4.368.5 10 .5c5.633 0 10 4.13 10 9.702 0 5.573-4.367 9.7-10 9.7-1.012 0-1.982-.135-2.895-.385a.8.8 0 0 0-.535.04l-1.985.875a.8.8 0 0 1-1.122-.707l-.055-1.78a.8.8 0 0 0-.268-.57C1.195 15.635 0 13.115 0 10.2m6.933-1.823-2.938 4.66c-.282.448.268.95.688.63l3.155-2.395a.6.6 0 0 1 .722-.002l2.338 1.752a1.5 1.5 0 0 0 2.17-.4l2.94-4.657c.28-.448-.27-.953-.69-.633l-3.155 2.395a.6.6 0 0 1-.723.003L9.103 7.977a1.5 1.5 0 0 0-2.17.4"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a href="tel:+61413828765">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 0 24 24"
            width="34"
            height="34"
          >
            <path
              d="M3.09896 24.9527H11.5413C12.4756 24.9527 13.2257 24.6812 13.7915 24.1382C14.3573 23.5951 14.6403 22.8792 14.6403 21.9906V3.79559C14.6403 2.90692 14.3573 2.19105 13.7915 1.64797C13.2257 1.1049 12.4756 0.833359 11.5413 0.833359H3.09896C2.17231 0.833359 1.42415 1.1049 0.854492 1.64797C0.284831 2.19105 0 2.90692 0 3.79559V21.9906C0 22.8792 0.284831 23.5951 0.854492 24.1382C1.42415 24.6812 2.17231 24.9527 3.09896 24.9527ZM3.33822 23.1185C2.85211 23.1185 2.47993 22.9951 2.22168 22.7482C1.96344 22.5013 1.83431 22.1501 1.83431 21.6944V4.09182C1.83431 3.63609 1.96344 3.2848 2.22168 3.03795C2.47993 2.79109 2.85211 2.66767 3.33822 2.66767H4.79655C4.97884 2.66767 5.06998 2.75502 5.06998 2.92971V3.19175C5.06998 3.42721 5.14214 3.619 5.28646 3.76711C5.43077 3.91522 5.62066 3.98928 5.85612 3.98928H8.79557C9.03862 3.98928 9.23041 3.91522 9.37094 3.76711C9.51145 3.619 9.5817 3.42721 9.5817 3.19175V2.92971C9.5817 2.75502 9.67285 2.66767 9.85515 2.66767H11.3135C11.792 2.66767 12.1604 2.79109 12.4186 3.03795C12.6769 3.2848 12.806 3.63609 12.806 4.09182V21.6944C12.806 22.1501 12.6769 22.5013 12.4186 22.7482C12.1604 22.9951 11.792 23.1185 11.3135 23.1185H3.33822ZM4.91048 22.2868H9.75261C9.90452 22.2868 10.0298 22.2374 10.1286 22.1386C10.2273 22.0399 10.2767 21.9108 10.2767 21.7513C10.2767 21.5918 10.2273 21.4645 10.1286 21.3696C10.0298 21.2747 9.90452 21.2272 9.75261 21.2272H4.91048C4.75857 21.2272 4.63135 21.2747 4.52881 21.3696C4.42627 21.4645 4.375 21.5918 4.375 21.7513C4.375 21.9108 4.42627 22.0399 4.52881 22.1386C4.63135 22.2374 4.75857 22.2868 4.91048 22.2868Z"
            />
          </svg>
        </a>
        <a href="mailto:hello@codyr.co">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="36"
            height="36"
          >
            <path
              d="M19 4.5H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3m-.41 2-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6.5zm1.41 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.91l5.88 5.88a3 3 0 0 0 4.24 0L20 7.91z"
            />
          </svg>
        </a>
      </div>
    </div>
    <form
      name="contact-form"
      class="scroll-hidden flex flex-col gap-lg w-full max-w-screen-sm"
      method="POST"
      novalidate
      data-netlify="true"
      on:submit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <div class="flex-col gap-3xs w-full">
        <label for="email">
          <div class="flex flex-row justify-start gap-md items-center w-full">
            <span>Email *</span>
            {#if emailError}
              <p id="email-error" class="error-message">{emailError}</p>
            {/if}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            class="input-field"
            placeholder="eg. john.smith@email.com"
            bind:value={email}
            required
            pattern={emailPattern}
            autocomplete="email"
            on:focus={clearEmailError}
          />
        </label>
      </div>
      <div>
        <label for="message">
          <div class="flex-row justify-between items-center w-full">
            <span>Message</span>
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message"
            bind:this={messageInput}
          ></textarea>
        </label>
      </div>
      <input type="hidden" name="subject" bind:value={subject} />
      <button type="submit" class="primary w-full sm:w-fit">Send</button>
    </form>

    <div class="w-xl h-xl icon-hl"></div>
  </section>
</main>

<style lang="postcss">
  label {
    @apply text-base text-a font-medium;
  }

  a {
    @apply flex gap-xl content-center items-center size-2xl;
  }

  svg {
    @apply icon-a max-w-fit overflow-visible transition-all duration-200;
  }
  svg:hover {
    @apply scale-105;
  }

  svg:active {
    @apply icon-b scale-95;
  }
  svg:focus {
    @apply scale-105;
  }

  .error-message {
    @apply text-bad-a text-xs;
  }
</style>
