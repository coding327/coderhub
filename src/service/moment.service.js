const connection = require("../app/database")

const sqlFragment = `
  SELECT
    m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
    JSON_OBJECT('id', u.id, 'name', u.name) author
  FROM moments m
  LEFT JOIN users u ON m.user_id = u.id
`

class MomentService {
  async create(userId, content) {
    const statement = `INSERT INTO moments (user_id, content) VALUES (?, ?);`

    const [result] = await connection.execute(statement, [userId, content])

    return result
  }

  async getMomentList(offset, size) {
    const statement = `
      SELECT
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name) author,
        (SELECT COUNT(*) FROM comments c WHERE c.moment_id = m.id) commentCount
      FROM moments m
      LEFT JOIN users u ON m.user_id = u.id
      LIMIT ?, ?;
    `

    const [result] = await connection.execute(statement, [offset, size])

    return result
  }

  async getMomentById(id) {
    // const statement = `SELECT * FROM moments WHERE id = ?;`
    const statement = `
      ${sqlFragment}
      WHERE m.id = ?;
    `

    const [result] = await connection.execute(statement, [id])

    return result[0]
  }

  async update(content, momentId) {
    const statement = `UPDATE moments SET content = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [content, momentId])
    return result
  }

  async remove(momentId) {
    const statement = `DELETE FROM moments WHERE id = ?;`
    const [result] = await connection.execute(statement, [momentId])
    return result
  }
}

module.exports = new MomentService()
