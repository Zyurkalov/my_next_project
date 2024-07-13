import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { UserAlreadyExistsException } from "./user-exists.exception";

@Catch(UserAlreadyExistsException)
export class UserAlreadyExistsExceptionFilter implements ExceptionFilter {
    catch(exception: UserAlreadyExistsException, host: ArgumentsHost) {
        const status = exception.getStatus()
        const message = exception.getResponse()

        const ctx = host.switchToHttp()
        const req = ctx.getRequest()
        const res = ctx.getResponse()

        res
            .status(status)
            .json({
                error: {
                    status: status,
                    message: message,
                    method: req.method,
                    url: req.url
                }
            });
    }  
}