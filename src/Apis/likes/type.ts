export interface createReactionRequest {
    reaction: ReactionType;
}

export type ReactionType = "Best" | "Good" | "Bad";
