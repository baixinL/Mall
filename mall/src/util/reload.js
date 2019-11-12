export function reload(router) {
  let NewPage = '_empty' + '?time=' + new Date().getTime();
  console.log("NewPage", NewPage);
  router.push({path: NewPage});
  router.go(-1);
}
