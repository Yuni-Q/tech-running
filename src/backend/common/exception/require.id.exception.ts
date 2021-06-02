import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

const status = HttpStatus.PRECONDITION_FAILED;
const message = 'id가 올바르지 않습니다.';

export class RequireIdException extends HttpException {
  @ApiProperty({
    example: status,
    description: '상태 코드',
    required: true,
  })
  public statusCode = status;
  @ApiProperty({
    example: message,
    description: '에러 메시지',
    required: true,
  })
  public message = message;

  constructor() {
    // TODO : status 제거
    super({ status, statusCode: status, message }, status);
  }
}
