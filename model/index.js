
import Customers from "../module/customers/customers.model"
import conn from "../config/datasource"

conn.sync({
  // force: true
})

export {
  Customers
}
