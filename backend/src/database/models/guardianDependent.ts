import { Model, DataTypes } from 'sequelize';
import sequelize from '.';

class GuardianDependent extends Model {
  public guardianId!: string;
  public dependentId!: string;
}

GuardianDependent.init({
  guardianId: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  dependentId: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  tableName: 'guardians_dependents',
});

export default GuardianDependent;
