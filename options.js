// Saves options to chrome.storage.sync.
function save_options() {
    var selTemp = document.getElementById('selTemplate').value;
    var unselTemp = document.getElementById('unselTemplate').value;
    var oldStyleP = document.getElementById('useOldstyle').checked;
    chrome.storage.sync.set({
        selectedTemplate: selTemp,
        unselectedTemplate: unselTemp,
        useOldStyleLinks: oldStyleP
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        selectedTemplate: 'L',
        unselectedTemplate: 'p',
        useOldStyleLinks: false
    }, function(items) {
        document.getElementById('unselTemplate').value = items.unselectedTemplate;
        document.getElementById('selTemplate').value = items.selectedTemplate;
        document.getElementById('useOldstyle').checked = items.useOldStyleLinks;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
                                                 save_options);
