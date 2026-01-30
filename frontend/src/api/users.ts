import { http } from "./http";

export type UserGetDto = {
  userId: number;
  username: string;
  emailAddress: string;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  schoolId: number;
};

export type UserPatchDto = Partial<{
  username: string;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  schoolId: number;
}>;

export async function getUserById(userId: number): Promise<UserGetDto> {
  return http<UserGetDto>(`/api/users/${userId}`);
}

export async function patchUser(userId: number, patch: UserPatchDto): Promise<UserGetDto> {
  return http<UserGetDto>(`/api/users/${userId}`, {
    method: "PATCH",
    body: patch,
  });
}
