import { classToClass, classToClassFromExist } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMemberService from '@modules/team/services/CreateMemberService';

export default class MemberController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { type, name, age, position, team_id } = request.body;

        const createMemberService = container.resolve(CreateMemberService);

        const member = await createMemberService.execute({
            name,
            type,
            age,
            position,
            team_id,
        });

        return response.json({ member: classToClass(member) });
    }
}
