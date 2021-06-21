const noteContainer = document.getElementById('note-card-container');

addNote = () => {
    const note = document.createElement('li');
    const input = document.createElement('textarea');
    const text = document.createElement('p');

    input.maxLength = '255';
    note.classList.add('note-card');
    
    note.appendChild(input);
    note.appendChild(text);
    noteContainer.appendChild(note);

    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.innerHTML = 'Save';
    saveButton.id = 'save-button'

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'X';
    deleteButton.id = "close-button";

    note.appendChild(saveButton);
    note.appendChild(deleteButton);
} 

noteContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        const button = e.target;
        const note = button.parentNode;
        const input = note.querySelector('textarea');
        const text = note.querySelector('p');
        switch (button.textContent) {
            case 'Save':
                text.innerHTML = input.value;
                button.innerHTML = 'Edit';
                input.hidden = true;
                break;
            case 'Edit':  
                button.innerHTML = 'Edit'; 
                input.hidden = false;
                input.value = text.textContent;
                button.innerHTML = 'Save';
                break;
            default:
                noteContainer.removeChild(note);
                break;
        }
    } 

    if (e.target && e.target.matches("li")) {
        const notes = document.querySelectorAll('.note-card');
        e.target.id = (e.target.id === "selected") ? e.target.id = "" : "selected";
        
    }

    const swappables = document.querySelectorAll('#selected');

    if (swappables.length === 2) {
        swapNotes(swappables[0], swappables[1])
    }
})

swapNotes = (note1, note2) => {

    const temp = document.createElement("li");
    note1.parentNode.insertBefore(temp, note1);

    note2.parentNode.insertBefore(note1, note2)

    temp.parentNode.insertBefore(note2, temp);

    temp.parentNode.removeChild(temp)

    note1.id = "";
    note2.id = "";
} 

