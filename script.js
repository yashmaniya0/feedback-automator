javascript: {
    function submit_feedback() {
        document.querySelectorAll('.table > tbody > tr > td > form > table > tbody > tr > td:nth-child(5) > input').forEach(i => i.click());
        document.querySelectorAll('iframe').forEach(i => i.contentWindow.document.querySelector('#tinymce > p:nth-child(1)').innerText = 'None');
        console.log('Script Ran Successfully !!!');
        //document.querySelector("input[type=submit]:nth-child(8)").click();
    }
    setTimeout(submit_feedback, 1000);
}