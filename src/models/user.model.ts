import {Entity, model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - User
 * User
 */
@model({name: 'User'})
export class User extends Entity {
  constructor(data?: Partial<User>) {
    super(data);
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({jsonSchema: {
  type: 'integer',
  id: true,
  format: 'int64',
  minimum: -9223372036854776000,
  maximum: 9223372036854776000,
}})
  id?: number;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
  maxLength: 256,
}})
  username?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  firstName?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  lastName?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
  format: 'email',
}})
  email?: string;

  /**
   *
   */
  @property({jsonSchema: {
  type: 'string',
}})
  phone?: string;

}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;


