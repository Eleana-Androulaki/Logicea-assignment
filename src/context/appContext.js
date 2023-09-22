import createDataContext from './createDataContext';
const token = "tokenForSignedInUser";

const appReducer = (state, action) => {
    switch (action.type){
      case 'changeTheme':
        return {
          ...state,
          themeDark: action.payload
        }
      case 'setUser':
        return {
          ...state,
          user: action.payload
        }
      default:
          return state;
    }
  };

  const changeTheming = (dispatch) => {
    return (isDark) => 
      dispatch({
        type: 'changeTheme',
        payload: isDark
      })
  } 

  const logout = (dispatch) => () => {
    localStorage.removeItem("token");
    dispatch({
      type: 'setUser',
      payload: null
    })
  }

  const login = (dispatch) => () => {
    localStorage.setItem("token", token);
    dispatch({
      type: 'setUser',
      payload: token
    })
  }

  export const { Context, Provider } = createDataContext(
    appReducer,
    {
      changeTheming,
      logout,
      login,
    },
    {
      themeDark: false,
      user: null,
    }
);
