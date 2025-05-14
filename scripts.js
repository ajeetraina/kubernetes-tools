    // Submit tool form
    submitToolBtn.addEventListener('click', function() {
        const form = document.getElementById('submit-tool-form');
        if (form.checkValidity()) {
            // Get the form data
            const toolName = document.getElementById('tool-name').value;
            const toolDescription = document.getElementById('tool-description').value;
            const toolCategory = document.getElementById('tool-category').value;
            const githubUrl = document.getElementById('github-url').value;
            
            // In a real implementation, this would create a PR to the GitHub repo
            // For now, we'll show a message explaining the process
            
            // Close the modal and reset form
            const modal = bootstrap.Modal.getInstance(document.getElementById('submit-tool-modal'));
            modal.hide();
            form.reset();
            
            // Show success message with explanation about the PR process
            const message = `Thank you for submitting "${toolName}"!\n\n` +
                            `In a production environment, this would create a Pull Request to the GitHub repository ` +
                            `(github.com/ajeetraina/kubernetes-tools) with your submission. ` +
                            `A repository maintainer would then review and merge the PR before the tool appears on the site.\n\n` +
                            `To actually submit a tool, please create a PR directly to the repository.`;
            
            alert(message);
        } else {
            form.reportValidity();
        }
    });