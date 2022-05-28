import { classToClass, classToClassFromExist } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMemberService from '@modules/team/services/CreateMemberService';
import DeleteMemberService from '@modules/team/services/DeleteMemberService';
import ShowMemberService from '@modules/team/services/ShowMemberService';

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
    public async show(request: Request, response: Response): Promise<Response> {
        const { team_id } = request.params;

        const showMemberService = container.resolve(ShowMemberService);

        const members = await showMemberService.execute(team_id);

        return response.json({ members: classToClass(members) });
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { member_id } = request.params;

        const deleteMemberService = container.resolve(DeleteMemberService);

        const result = await deleteMemberService.execute(member_id);

        return response.json({ result: classToClass(result) });
    }
}
