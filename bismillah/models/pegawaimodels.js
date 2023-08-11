import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const pegawai = db.define('pegawai',{
    name:{ 
        type: DataTypes.STRING,
        allowNull: false
    },
    jabatan:{ 
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:{ 
        type: DataTypes.DATE
    },
    updatedAt:{ 
        type: DataTypes.DATE
    }
},{
    freezeTableName: true,
    timestamps: true
});

export default pegawai;