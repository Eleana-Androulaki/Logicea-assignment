import createDataContext from './createDataContext';


const appReducer = (state, action) => {
    switch (action.type){
      case 'changeTheme':
        return {
          ...state,
          themeDark: action.payload
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


  export const { Context, Provider } = createDataContext(
    appReducer,
    {
      changeTheming
    },
    {
      themeDark: false
    }
);
