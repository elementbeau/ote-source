export type UserGetDto = {
    userId: number;
    username: string;
    emailAddress: string;
    firstName: string | null;
    lastName: string | null;
    middleName: string | null;
    schoolId: number;
};

export const localTestUser: UserGetDto = {
    userId: 1,
    username: "beauc",
    emailAddress: "beau@example.com",
    firstName: "Beau",
    lastName: "Coffie",
    middleName: "Jeremy",
    schoolId: 1,
};