$(document).ready(function() {
    const todoField = $('todoField');
    const addTodoBtn = $('addTodoBtn');
    addTodoBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/todos', {
            // task gotten from todoController
            task: todoField.val(),
        });
        window.location.reload();
    });
});
