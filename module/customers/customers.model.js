import Sequelize from "sequelize"
import conn from "../../config/datasource"

const Customers = conn.define('customers', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: Sequelize.STRING(50), allowNull: false, unique: true },
    hash: { type: Sequelize.STRING, allowNull: false },
    full_name: { type: Sequelize.STRING(50), allowNull: false },
    email: { type: Sequelize.STRING(50), allowNull: false },
    is_activated: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: 0 }
}, { timestamps: false })

export default Customers