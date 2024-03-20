const connection = require('../app/database')

class CommentService {
  async create(momentId, content, id) {
    const statement = `INSERT INTO comments (content, moment_id, user_id) VALUES (?, ?, ?);`

    const [result] = await connection.execute(statement, [content, momentId, id])

    return result
  }

  async reply(momentId, content, id, commentId) {
    const statement = `INSERT INTO comments (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`

    const [result] = await connection.execute(statement, [content, momentId, id, commentId])

    return result
  }

  async update(commentId, content) {
    const statement = `UPDATE comments SET content = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [content, commentId])
    return result
  }

  async remove(commentId) {
    const statement = `DELETE FROM comments WHERE id = ?;`
    const [result] = await connection.execute(statement, [commentId])
    return result
  }

  async getCommentsByMomentId(momentId) {
    const statement = `SELECT * FROM comments WHERE moment_id = ?;`
    const [result] = await connection.execute(statement, [momentId])
    return result
  }
}

module.exports = new CommentService()