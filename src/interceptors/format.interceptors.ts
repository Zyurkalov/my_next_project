import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class FormatInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next
            .handle()
            .pipe(
                map(data => ({
                    status: context.getArgByIndex(0).customResponse.statusCode,
                    response: data,
                    })
                )
            )
    }
}