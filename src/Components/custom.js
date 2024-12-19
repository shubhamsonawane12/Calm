import $ from 'jquery';

function Custom() {
  $(document).ready(function () {
    $('.carousel').carousel({
      interval: 6000
    });
  });
}

export default Custom;