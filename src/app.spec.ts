import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { execute } from 'graphql';
import { parse, DocumentNode } from 'graphql';
import schema from './utils/schema';

describe('App', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return Hello World!', async () => {
    const query = `
      query {
        hello
      }
    `;

    const ast: DocumentNode = parse(query);

    const expected = {
      data: {
        hello: 'Hello World!',
      },
    };

    const result = await execute({
      schema: schema,
      document: ast,
      contextValue: { req: {} },
    });
    expect(result).toEqual(expected);
  });
});
