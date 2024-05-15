const scriptURL = 'https://script.google.com/macros/s/AKfycbzugglpPKYU5vaafLUKbziorYF_JOY6Nib60GS9H92wvg_sZzv69Drd5YXFL7zgfhk_Mw/exec'
        const form = document.forms['submit-to-google-sheet']

        const msg = document.getElementById("msg");
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                console.log('Success!', response);
                msg.innerHTML= "Message Sent Successfully!!!";
                setTimeout(function(){
                    msg.innerHTML = "";
                },5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })