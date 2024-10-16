$(document).ready(function() {
	$('#todo-input').on('input', function() {
		const inputVal = $(this).val().trim();
		$('#add-todo').prop('disabled', inputVal === ''); // activate/deactivate button
	});

	// add a new task
	$('#add-todo').click(function() {
		const todoText = $('#todo-input').val().trim();
		if (todoText) {
			$('#todo-list').append(`
                <li>
                    ${todoText}
                    <button class="delete-todo">Delete</button>
                </li>
            `);
			$('#todo-input').val('').focus(); // clear the field and focus on it
			$('#add-todo').prop('disabled', true);
		}
	});

	// delete task
	$(document).on('click', '.delete-todo', function() {
		$(this).parent().remove();
	});

	// add Enter
	$('#todo-input').keypress(function(event) {
		if (event.which === 13 && !$('#add-todo').prop('disabled')) {
			$('#add-todo').click();
		}
	});
});
