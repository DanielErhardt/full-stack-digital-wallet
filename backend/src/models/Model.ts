import {
  CreationAttributes, Model as SeqModel, ModelStatic, Includeable, WhereOptions,
} from 'sequelize';
import { Entity } from '../@types/Entities/Entity';

abstract class Model<T extends SeqModel, U extends Entity> {
  protected _model: ModelStatic<T>;
  protected abstract _excludeAttributes: string[];
  protected abstract _associations: Includeable[];

  constructor(model: ModelStatic<T>) {
    this._model = model;
  }

  async createOne(account: U): Promise<T> {
    return this._model.create(account as CreationAttributes<T>);
  }

  async findById(id: string, associate = false): Promise<T | null> {
    return associate
      ? this._model.findByPk(id, {
        include: this._associations,
        attributes: { exclude: this._excludeAttributes },
      })
      : this._model.findByPk(id);
  }

  async updateOne(id: string, attributes: Partial<U>): Promise<T> {
    const result = await this._model.update(
      attributes,
      {
        where: { id } as WhereOptions,
        returning: true,
      },
    );
    return result[1][0];
  }

  async findAll(associate = false): Promise<T[]> {
    return associate
      ? this._model.findAll({
        include: this._associations,
        attributes: { exclude: this._excludeAttributes },
      })
      : this._model.findAll();
  }
}

export default Model;
