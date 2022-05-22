import { PostAction, PostActionTypes, PostState } from "../../types/post";

const initialState: PostState = {
   posts: [],
   loading: false,
   error: null
};

export const postReducer = (state = initialState, action: PostAction) => {
   switch (action.type) {
      case PostActionTypes.FETCH_POSTS: {
         return { ...state }
      }
      case PostActionTypes.FETCH_POSTS_SUCCES: {
         return { ...state, posts: action.payload }
      }
      case PostActionTypes.FETCH_POSTS_ERROR: {
         return { ...state, error: action.payload }
      }
      case PostActionTypes.FETCH_POSTS_REMOVE: {
         return { ...state, posts: state.posts.filter(p => p.id !== action.payload) }
      }
      case PostActionTypes.FETCH_POSTS_CREATE: {
         return { ...state, posts: [...state.posts, action.payload] }
      }
      default: {
         return state
      }
   }
};