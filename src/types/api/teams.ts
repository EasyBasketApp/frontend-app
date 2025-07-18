export type CreateTeamPayload = {
  name: string;
  club: string;
  color?: string;
  description?: string;
  imageUrl?: string;
};

export type UpdateTeamPayload = Partial<CreateTeamPayload>;
