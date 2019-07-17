import Todo from '../components/Todo';

export default {
  component: Todo,
  props: {
    todo: { text: 'Lorem ipsum', completed: false, id: -1 },
    classes: {
      container: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid #ededed'
      },
      checkCircle: {
        marginLeft: '0px'
      },
      label: {
        textDecoration: 'line-through'
      }
    },
    onChange: value => console.log(`Select: ${value}`)
  }
};