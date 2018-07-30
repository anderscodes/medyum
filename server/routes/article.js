const articlecontroller = require('./../controllers/article.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {

  router
    .route('./articles')
    .get(articlecontroller.getAll)

  router
    .route('/article')
    .post(multipartWare, articlecontroller.addArticle)

  router
    .route('/article/comment')
    .post(articlecontroller.commentArticle)

  router
    .route('/article/:id')
    .get(articlecontroller.getArticle)
}
