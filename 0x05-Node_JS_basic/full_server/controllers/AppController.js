/**
 * Contains the miscellaneous route handlers.
 * @author Rose Kendy <https://github.com/Keny09>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
