import { object, enum as zodEnum } from "zod"

export const signInOAuthSchema = object({
  provider: zodEnum([
    'DiscordOAuth', 
  ])
});

export const signUpOAuthSchema = signInOAuthSchema;