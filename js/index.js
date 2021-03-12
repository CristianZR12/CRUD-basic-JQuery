var Notes = [];
var editOrAddNotes = false;
var indexEdit = null;

const getNotes = () => {
    let tbBodyMain = $('#tbodyTN');
    var tbBodyMain1 = '';
    Notes.forEach((note, index) => {
        tbBodyMain1 += `<tr>
            <td>${index + 1}</td>
            <td>${note.titleNotes}</td>
            <td>${note.descriptionNotes}</td>
            <td class="d-flex"><button class="btn btn-danger" onClick="deleteNotes(${index})">Delete</button><button class="btn btn-primary" onClick="editNotes(${index})">Edit</button></td>
        </tr>`;
    });
    tbBodyMain.html(tbBodyMain1);
}

const deleteNotes = (index1) => {
    Notes.splice(index1, 1);
    getNotes();
    console.log('Notes Deleted');
}

const editNotes = (index1) => {
    editOrAddNotes = true;
    indexEdit = index1;
    let titleN = $('#titleNotes');
    let descriptionN = $('#descriptionNotes');
    titleN.val(Notes[index1].titleNotes);
    descriptionN.val(Notes[index1].descriptionNotes);
}

const index = () => {
    var formNotes = $('#formNotes');
    formNotes.submit((e) => {
        e.preventDefault();
        let titleN = $('#titleNotes');
        let descriptionN = $('#descriptionNotes');
        if (editOrAddNotes === false) {
            let title1 = titleN.val();
            let description = descriptionN.val();
            if (title1 !== '' || description !== '') {
                var notes = {
                    titleNotes: title1,
                    descriptionNotes: description
                }
                Notes.push(notes);
                console.log(Notes);
                getNotes();
            } else {
                console.log('Por favor rellene todos los campos del formulario')
            }
        } else if(editOrAddNotes === true) {
            let title1 = titleN.val();
            let description = descriptionN.val();
            if (title1 !== '' || description !== '') {
                var notes = {
                    titleNotes: title1,
                    descriptionNotes: description
                }
                Notes[indexEdit] = notes;
                console.log(Notes);
                editOrAddNotes = false;
                indexEdit = null;
                getNotes();
            } else {
                console.log('Por favor rellene todos los campos del formulario')
            }
        }
        formNotes.trigger('reset');
    });
}

$(() => {
    console.log('JQuery is function');
    index();
});