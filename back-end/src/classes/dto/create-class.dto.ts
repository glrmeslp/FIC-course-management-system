export class CreateClassDto {
    readonly name: string;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly professorId: string;
    readonly ficCourseId: string;
}
