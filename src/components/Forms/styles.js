const backColor = 'rgb(28, 207, 0)';
const btnColor = 'rgba(28, 140, 0, .5)';
const hoverColor = 'rgb(28, 140, 0)';


export default {
  wrapper: {
    height: '450px',
    maxWidth: '350px',
    backgroundColor: backColor,
    borderRadius: '10px'
  },
  form: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fieldWrapper: {
    width: '80%'
  },
  label: {
    color: 'white',
    fontSize: '17px',
    fontWeight: 400
  },
  field: {
    border: 'none',
    margin: '0 0 10px',
    '&:focus': {
      border: 'none',
      boxShadow: 'none'
    }
  },
  button: {
    width: '80%',
    height: '40px',
    border: 'none',
    borderRadius: '1000px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: btnColor,
    '&:hover': {
      backgroundColor: hoverColor
    },
    '&:focus': {
      outline: 0
    }
  }
}