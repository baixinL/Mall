export function  checkCookie (name) {
  var re = new RegExp("^" + name + "=.*$");
  let cookies_arr = document.cookie.split('; ');
  let ifhad = false;
  cookies_arr.forEach(item => {
    if ( re.test(item) ) {
      ifhad = true;
      return
    }
  })
  return ifhad
}
