import { v4 as uuidv4 } from 'uuid';
import style from './addPost.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST } from '../../../store/store';

const AddPost = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);
  const hendelAddPost = (e) => {
    e.preventDefault();

    if (!String(e.target[0].value) == '' && !String(e.target[1].value) == '') {
      let newPost = {
        id: uuidv4(),
        title: e.target[0].value,
        body: e.target[1].value,
      };
      dispatch({ type: ADD_POST, payload: newPost });
    } else {
      alert('заполине поля');
    }
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={(e) => hendelAddPost(e)}>
        <input type="text" placeholder="title" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="body"
        ></textarea>
        <button type="submit">Добавить пост</button>
      </form>
    </div>
  );
};

export default AddPost;
