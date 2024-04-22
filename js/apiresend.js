document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", function() {
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const subject = document.getElementById("subject").value;
      const html = document.getElementById("html").value;
  

      
      const resend = new Resend('re_123456789');

      (async function () {
        const { data, error } = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['delivered@resend.dev'],
          subject: 'Hello World',
          html: '<strong>It works!</strong>',
        });
      
        if (error) {
          return console.error({ error });
        }
      
        console.log({ data });
      })();
    });
  });