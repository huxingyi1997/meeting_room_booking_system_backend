import { Type, applyDecorators } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  getSchemaPath,
  ApiResponseOptions,
  ApiExtraModels,
} from '@nestjs/swagger';

const getApiResponseOptions = <TModel extends Type<any>>(
  model?: TModel,
): ApiResponseOptions => {
  const schema = model
    ? {
        properties: {
          data: {
            type: 'object',
            $ref: getSchemaPath(model),
          },
          code: {
            type: 'integer',
          },
          message: {
            type: 'string',
          },
        },
        $unifiedResRef: getSchemaPath(model) + 'UnifiedRes',
      }
    : {
        properties: {
          data: {
            type: 'string',
          },
          code: {
            type: 'integer',
          },
          message: {
            type: 'string',
          },
        },
        $unifiedResRef: 'NullUnifiedRes',
      };
  return {
    schema,
  };
};

export const ApiUnifiedOkResponse = <TModel extends Type<any>>(
  model?: TModel,
) => {
  return model
    ? applyDecorators(
        ApiExtraModels(model),
        ApiOkResponse(getApiResponseOptions(model)),
      )
    : applyDecorators(ApiOkResponse(getApiResponseOptions(model)));
};

export const ApiUnifiedCreatedResponse = <TModel extends Type<any>>(
  model?: TModel,
) => {
  return model
    ? applyDecorators(
        ApiExtraModels(model),
        ApiCreatedResponse(getApiResponseOptions(model)),
      )
    : applyDecorators(ApiCreatedResponse(getApiResponseOptions(model)));
};
