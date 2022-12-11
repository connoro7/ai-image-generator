function onSubmit(e) {
    e.preventDefault()

    // Query selectors

    // Form data getters

    // Invalid form input check

    generateImageRequest(prompt, size)
}

async function generateImageRequest(prompt, size) {
    try {
        showSpinner()

        // Fetch POST request
        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // placeholder
            body: body
        })
    }

    // if response is not ok, 
        // remove spinner
        // throw error
    
    // if response is ok,
        // get response data as json
        
        // query select image element src attribute
            // set src attribute to response data
            
        // remove spinner

    catch (error) {
        // dispaly error message in document
    }
}

function showSpinner() {
    // query select spinner element
    // add .show class to spinner element
}

function removeSpinner() {
    // query select spinner element
    // remove .show class from spinner element
}

// Add query selector for form element submit event listener, 
    // on form submission, call onSubmit function