import {api, operation, param, requestBody} from '@loopback/rest';
import {User} from '../models/user.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by user.
 *
 * Operations about user
 */
@api({
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          username: {
            type: 'string',
            maxLength: 256,
          },
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          email: {
            type: 'string',
            format: 'email',
          },
          phone: {
            type: 'string',
          },
        },
      },
      Error: {
        type: 'object',
        required: [
          'code',
          'message',
        ],
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
    requestBodies: {
      UserArray: {
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        description: 'List of user object',
        required: true,
      },
    },
  },
  paths: {},
})
export class UserController {
    constructor() {} 
  /**
   * This can only be done by the logged in user.
   *
   * @param _requestBody Created user object
   */
  @operation('post', '/user', {
  tags: [
    'user',
  ],
  summary: 'Create user',
  description: 'This can only be done by the logged in user.',
  operationId: 'createUser',
  responses: {
    default: {
      description: 'successful operation',
    },
  },
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/User',
        },
        examples: {
          'sample-user': {
            summary: 'Example',
            value: {
              username: 'johndoe589',
              firstName: 'John',
              lastName: 'Doe',
              email: 'bestjohn@doe.com',
              phone: '+71002003040',
            },
          },
        },
      },
    },
    description: 'Created user object',
    required: true,
  },
})
  async createUser(@requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/User',
      },
      examples: {
        'sample-user': {
          summary: 'Example',
          value: {
            username: 'johndoe589',
            firstName: 'John',
            lastName: 'Doe',
            email: 'bestjohn@doe.com',
            phone: '+71002003040',
          },
        },
      },
    },
  },
  description: 'Created user object',
  required: true,
}) _requestBody: User): Promise<unknown> {
     throw new Error('Not implemented'); 
  }
  /**
   * Returns a user based on a single ID, if the user does not have access to the
user
   *
   * @param userId ID of user
   * @returns user response
   */
  @operation('get', '/user/{userId}', {
  tags: [
    'user',
  ],
  description: 'Returns a user based on a single ID, if the user does not have access to the user',
  operationId: 'find user by id',
  responses: {
    '200': {
      description: 'user response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/User',
          },
        },
      },
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Error',
          },
        },
      },
    },
  },
  parameters: [
    {
      name: 'userId',
      in: 'path',
      description: 'ID of user',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
})
  async findUserById(@param({
  name: 'userId',
  in: 'path',
  description: 'ID of user',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) userId: number): Promise<User> {
     throw new Error('Not implemented'); 
  }
  /**
   * deletes a single user based on the ID supplied
   *
   * @param userId ID of user
   */
  @operation('delete', '/user/{userId}', {
  tags: [
    'user',
  ],
  description: 'deletes a single user based on the ID supplied',
  operationId: 'deleteUser',
  responses: {
    '204': {
      description: 'user deleted',
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Error',
          },
        },
      },
    },
  },
  parameters: [
    {
      name: 'userId',
      in: 'path',
      description: 'ID of user',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
})
  async deleteUser(@param({
  name: 'userId',
  in: 'path',
  description: 'ID of user',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) userId: number): Promise<unknown> {
     throw new Error('Not implemented'); 
  }
  /**
   * Update user with User ID supplied
   *
   * @param userId ID of user
   * @param _requestBody
   */
  @operation('put', '/user/{userId}', {
  tags: [
    'user',
  ],
  description: 'Update user with User ID supplied',
  operationId: 'updateUser',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/User',
        },
        examples: {
          'sample-user': {
            summary: 'Example',
            value: {
              firstName: 'Julie',
              lastName: 'Doe',
              email: 'bestjohn@doe.com',
              phone: '+71004242424',
            },
          },
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'user updated',
    },
    default: {
      description: 'unexpected error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Error',
          },
        },
      },
    },
  },
  parameters: [
    {
      name: 'userId',
      in: 'path',
      description: 'ID of user',
      required: true,
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
})
  async updateUser(@param({
  name: 'userId',
  in: 'path',
  description: 'ID of user',
  required: true,
  schema: {
    type: 'integer',
    format: 'int64',
  },
}) userId: number, @requestBody({
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/User',
      },
      examples: {
        'sample-user': {
          summary: 'Example',
          value: {
            firstName: 'Julie',
            lastName: 'Doe',
            email: 'bestjohn@doe.com',
            phone: '+71004242424',
          },
        },
      },
    },
  },
}) _requestBody: User): Promise<unknown> {
     throw new Error('Not implemented'); 
  }
}

