async function commentFormHandler(event) {
    event.preventDefault();
    const commentTitle = document.querySelector('input[name="commentTittle"]').value;
    const commentText = document.querySelector('textarea[name="commentBody"]').value.trim();
    const commentId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    if (commentText && commentId) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                commentId,
                commentTitle,
                commentText
            }),
            headers: {
                'Content-Type': 'application/jason'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);