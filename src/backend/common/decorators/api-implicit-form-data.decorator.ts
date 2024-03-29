import { createParamDecorator } from '@nestjs/swagger/dist/decorators/helpers';

const initialMetadata = {
  name: '',
  required: true,
};

export const ApiImplicitFormData = (metadata: {
  name: string;
  description?: string;
  required?: boolean;
  type: any;
}): MethodDecorator => {
  const param = {
    name:
      metadata.name === null || metadata.name === undefined
        ? initialMetadata.name
        : metadata.name,
    in: 'formData',
    description: metadata.description || '',
    required: metadata.required || false,
    type: metadata.type,
  };
  return createParamDecorator(param, initialMetadata);
};
