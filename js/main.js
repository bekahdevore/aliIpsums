
$('.main-heading').sticky();

$('.main-heading').on('sticky-start', function () {
  $(this).css({
    fontSize:  '2rem',
    background: '#878787',
    marginTop: '0',
    borderBottom: '3px solid black'
  });
});

$('.main-heading').on('sticky-end', function () {
  $(this).css({
    fontSize:  '5.625rem',
    background: 'transparent',
    border: 'none'
  });
});

function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}


