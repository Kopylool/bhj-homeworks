const fontSizeLinks = document.querySelectorAll('.font-size');

fontSizeLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const size = e.target.getAttribute('data-size');

    fontSizeLinks.forEach(link => {
      link.classList.remove('font-size_active');
    });

    e.target.classList.add('font-size_active');

    const book = document.getElementById('book');
    book.classList.remove('book_fs-big', 'book_fs-small');

    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
  });
});
