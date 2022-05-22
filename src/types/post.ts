export interface PostState {
   posts: any[],
   loading: boolean,
   error: string | null | any
};

export enum PostActionTypes {
   FETCH_POSTS = 'FETCH_POSTS',
   FETCH_POSTS_SUCCES = 'FETCH_POSTS_SUCCES',
   FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
   FETCH_POSTS_REMOVE = 'FETCH_POSTS_REMOVE',
   FETCH_POSTS_CREATE = 'FETCH_POSTS_CREATE',
};

interface FetchPostAction {
   type: PostActionTypes.FETCH_POSTS
};

interface FetchPostSuccesAction {
   type: PostActionTypes.FETCH_POSTS_SUCCES,
   payload: any[]
};

interface FetchPostErrorAction {
   type: PostActionTypes.FETCH_POSTS_ERROR,
   payload: string | null | any
};

interface FetchPostRemoveAction {
   type: PostActionTypes.FETCH_POSTS_REMOVE,
   payload: number
};

interface FetchPostCreateAction {
   type: PostActionTypes.FETCH_POSTS_CREATE,
   payload: string
}

export type PostAction = FetchPostAction | FetchPostSuccesAction | FetchPostErrorAction | FetchPostRemoveAction | FetchPostCreateAction; 