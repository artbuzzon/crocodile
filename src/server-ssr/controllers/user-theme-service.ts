import { UserTheme as userThemeRepository } from '../../db-postgres/models/user-theme.model';
import { BaseRESTService, FindRequest, CreateRequest } from './interface';

export class UserThemeService implements BaseRESTService {
  public find = ({ ownerId, title }: FindRequest) => {
    if (ownerId) {
      return userThemeRepository.findOne({
        where: {
          ownerId: ownerId, // Защита от SQL Injection присутствует
        },
      });
    }
    return userThemeRepository.findOne({
      where: {
        theme: `%${title}%`, // Защита от SQL Injection присутствует
      },
    });
  };

  public create = (data: CreateRequest) => {
    // @ts-ignore
    return userThemeRepository.create(data);
  };
}
